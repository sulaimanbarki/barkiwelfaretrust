<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Donor;
use Inertia\Response;
use App\Models\Invoice;
use App\Models\Program;
use App\Models\Beneficiary;
use App\Models\ExpenseHead;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;


class ReportsController extends Controller
{

    public function index(): Response
    {
        return Inertia::render('Reports/Index');
    }

    public function donationsByDate(Request $request): Response
    {
        $from = $request->input('from', now()->startOfMonth()->toDateString());
        $to = $request->input('to', now()->toDateString());
        $paymentMethodId = $request->input('payment_method_id');

        $donations = Transaction::with('paymentMethod')
            ->where('transaction_type', 'donation')
            ->whereBetween('transaction_date', [$from, $to])
            ->when($paymentMethodId, fn($q) => $q->where('payment_method', $paymentMethodId))
            ->selectRaw('transaction_date, payment_method, SUM(amount) as total')
            ->groupBy('transaction_date', 'payment_method')
            ->orderBy('transaction_date')
            ->get()
            ->map(function ($donation) {
                $donation->payment_method_name = optional($donation->paymentMethod)->name;
                return $donation;
            });

        return Inertia::render('Reports/DonationsByDate', [
            'donations' => $donations,
            'from' => $from,
            'to' => $to,
            'paymentMethods' => \App\Models\PaymentMethod::select('id', 'name')->get(),
            'selectedPaymentMethodId' => $paymentMethodId,
        ]);
    }

    public function exportDonationsByDate(Request $request)
    {
        $from = $request->input('from', now()->startOfMonth()->toDateString());
        $to = $request->input('to', now()->toDateString());
        $paymentMethodId = $request->input('payment_method_id');

        $paymentMethodId = is_string($paymentMethodId) && $paymentMethodId === 'null' ? null : $paymentMethodId;

        $donations = Transaction::where('transaction_type', 'donation')
            ->whereBetween('transaction_date', [$from, $to])
            ->when($paymentMethodId, fn($q) => $q->where('payment_method', $paymentMethodId))
            ->selectRaw('transaction_date, payment_method, SUM(amount) as total')
            ->groupBy('transaction_date', 'payment_method')
            ->orderBy('transaction_date')
            ->get()
            ->map(function ($donation) {
                $donation->payment_method_name = optional($donation->paymentMethod)->name;
                return $donation;
            });

        $invoice = create_invoice('donations-by-date');

        $pdf = Pdf::loadView('pdf.donations-by-date', [
            'donations' => $donations,
            'from' => $from,
            'to' => $to,
            'invoice' => $invoice,
        ])->setPaper('a4', 'portrait');

        $timestamp = now()->format('Y-m-d_H-i-s');

        return $pdf->download("donations-by-date_{$timestamp}.pdf");
    }



    public function donationsByCampaign(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');

        $query = Transaction::where('transaction_type', 'donation')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->where('type', 'campaign')
            ->with('campaign')
            ->get()
            ->groupBy('campaign.title')
            ->map(function ($group) {
                return [
                    'total' => $group->sum('amount'),
                ];
            })
            ->map(function ($data, $campaign) {
                return [
                    'campaign' => $campaign,
                    'total' => $data['total'],
                ];
            })
            ->values();

        return Inertia::render('Reports/DonationsByCampaign', [
            'donations' => $query,
            'from' => $from,
            'to' => $to,
        ]);
    }

    public function expensesByProgram(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');

        $query = Transaction::where('transaction_type', 'expense')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->where('type', 'program')
            ->with('program')
            ->get()
            ->groupBy('program.name')
            ->map(function ($group) {
                return [
                    'total' => $group->sum('amount'),
                ];
            })
            ->map(function ($data, $program) {
                return [
                    'program' => $program,
                    'total' => $data['total'],
                ];
            })
            ->values();

        return Inertia::render('Reports/ExpensesByProgram', [
            'expenses' => $query,
            'from' => $from,
            'to' => $to,
        ]);
    }

    public function financialSummary(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');

        $donations = \App\Models\Transaction::where('transaction_type', 'donation')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->sum('amount');

        $expenses = \App\Models\Transaction::where('transaction_type', 'expense')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->sum('amount');

        return Inertia::render('Reports/FinancialSummary', [
            'from' => $from,
            'to' => $to,
            'summary' => [
                'donations' => $donations,
                'expenses' => $expenses,
                'net' => $donations - $expenses,
            ],
        ]);
    }

    public function beneficiariesByProgram(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');

        $query = \App\Models\Transaction::where('transaction_type', 'expense')
            ->where('type', 'program')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->get()
            ->groupBy('type_id') // group by program ID
            ->map(function ($group, $programId) {
                $program = \App\Models\Program::find($programId);
                return [
                    'program' => $program?->name ?? 'Unknown',
                    'total' => $group->count(), // count of transactions (i.e., beneficiaries)
                    'program_id' => $programId,
                ];
            })
            ->values();

        return Inertia::render('Reports/BeneficiariesByProgram', [
            'beneficiaries' => $query,
            'from' => $from,
            'to' => $to,
        ]);
    }

    public function beneficiariesByProgramDetail(Request $request, $programId)
    {
        $from = $request->input('from');
        $to = $request->input('to');
        $beneficiaryId = $request->input('beneficiary_id');

        $program = Program::findOrFail($programId);

        $query = Transaction::with('beneficiary')
            ->where('transaction_type', 'expense')
            ->where('type', 'program')
            ->where('type_id', $programId)
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->when($beneficiaryId, fn($q) => $q->where('type_type_id', $beneficiaryId))
            ->orderByDesc('transaction_date');

        $transactions = $query->get(); // or paginate(20) if needed

        return Inertia::render('Reports/BeneficiariesByProgramDetail', [
            'program' => $program,
            'transactions' => $transactions,
            'from' => $from,
            'to' => $to,
            'beneficiaries' => Beneficiary::select('id', 'full_name as name')->orderBy('full_name')->get(),
            'selectedBeneficiary' => $beneficiaryId,
        ]);
    }

    public function exportBeneficiariesByProgramDetail(Request $request, $programId)
    {
        $from = $request->input('from');
        $to = $request->input('to');
        $beneficiaryId = $request->input('beneficiary_id');

        $program = Program::findOrFail($programId);
        $beneficiaryId = is_string($beneficiaryId) && $beneficiaryId === 'null' ? null : $beneficiaryId;

        $query = Transaction::with('beneficiary')
            ->where('transaction_type', 'expense')
            ->where('type', 'program')
            ->where('type_id', $programId)
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->when($beneficiaryId, fn($q) => $q->where('type_type_id', $beneficiaryId))
            ->orderByDesc('transaction_date');

        $transactions = $query->get();

        $invoice = create_invoice('beneficiaries-by-program');

        $pdf = \PDF::loadView('pdf.beneficiaries-by-program-detail', [
            'program' => $program,
            'transactions' => $transactions,
            'from' => $from,
            'to' => $to,
            'invoice' => $invoice,
        ])->setPaper('a4', 'portrait');

        $timestamp = now()->format('Y-m-d_H-i-s');

        return $pdf->download("beneficiaries-by-program_{$timestamp}.pdf");
    }

    public function overallBeneficiariesReport(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');
        $beneficiaryId = $request->input('beneficiary_id');
        $programId = $request->input('program_id');

        $query = \App\Models\Transaction::with(['beneficiary', 'program'])
            ->where('transaction_type', 'expense')
            ->where('type', 'program')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->when($beneficiaryId, fn($q) => $q->where('type_type_id', $beneficiaryId))
            ->when($programId, fn($q) => $q->where('type_id', $programId))
            ->orderByDesc('transaction_date')
            ->get();

        return Inertia::render('Reports/OverallBeneficiaries', [
            'transactions' => $query,
            'from' => $from,
            'to' => $to,
            'beneficiaries' => \App\Models\Beneficiary::select('id', 'full_name as name')->get(),
            'programs' => \App\Models\Program::select('id', 'name')->get(),
            'selectedBeneficiary' => $beneficiaryId,
            'selectedProgram' => $programId,
        ]);
    }

    // exportOverallBeneficiariesReport
    public function exportOverallBeneficiariesReport(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');
        $beneficiaryId = is_string($request->input('beneficiary_id')) && $request->input('beneficiary_id') === 'null' ? null : $request->input('beneficiary_id');
        $programId = is_string($request->input('program_id')) && $request->input('program_id') === 'null' ? null : $request->input('program_id');

        $query = \App\Models\Transaction::with(['beneficiary', 'program'])
            ->where('transaction_type', 'expense')
            ->where('type', 'program')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->when($beneficiaryId, fn($q) => $q->where('type_type_id', $beneficiaryId))
            ->when($programId, fn($q) => $q->where('type_id', $programId))
            ->orderByDesc('transaction_date')
            ->get();

        $invoice = create_invoice('overall-beneficiaries');

        $pdf = Pdf::loadView('pdf.overall-beneficiaries', [
            'transactions' => $query,
            'from' => $from,
            'to' => $to,
            'invoice' => $invoice,
        ])->setPaper('a4', 'portrait');

        $timestamp = now()->format('Y-m-d_H-i-s');
        return $pdf->download("overall-beneficiaries_{$timestamp}.pdf");
    }




    public function topDonors(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');

        $query = Transaction::where('transaction_type', 'donation')
            ->where('type', 'donor')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->with('donor')
            ->get()
            ->groupBy('type_id')
            ->map(function ($group, $donorId) {
                $donor = $group->first()->donor;
                return [
                    'donor' => $donor?->full_name ?? 'Anonymous',
                    'total' => $group->sum('amount'),
                ];
            })
            ->sortByDesc('total')
            ->values();

        return Inertia::render('Reports/TopDonors', [
            'donors' => $query->all(),
            'from' => $from,
            'to' => $to,
        ]);
    }

    public function currentBalance()
    {
        $in = \App\Models\Transaction::where('transaction_type', 'donation')->sum('amount');
        $out = \App\Models\Transaction::where('transaction_type', 'expense')->sum('amount');

        $balance = $in - $out;

        return Inertia::render('Reports/CurrentBalance', [
            'in' => $in,
            'out' => $out,
            'balance' => $balance,
        ]);
    }

    public function generalExpenses(Request $request)
    {
        $query = Transaction::where('transaction_type', 'expense')
            ->where('type', 'general_expense');

        if (isset($request->expense_head_id)) {
            $query->where('type_id', $request->input('expense_head_id'));
        }

        if ($request->has('from') && $request->input('to')) {
            $query->whereDate('transaction_date', '>=', $request->input('from'))
                ->whereDate('transaction_date', '<=', $request->input('to'));
        }

        $expenses = $query->with('generalExpense')->orderBy('transaction_date', 'desc')->get();
        $expenseHeads = ExpenseHead::all();

        return Inertia::render('Reports/ExpenseReport', [
            'expenses' => $expenses,
            'expenseHeads' => $expenseHeads,
            'filters' => $request->only(['start_date', 'end_date', 'expense_head_id']),
        ]);
    }

    // exportGeneralExpenses
    public function exportGeneralExpenses(Request $request)
    {
        $query = Transaction::where('transaction_type', 'expense')
            ->where('type', 'general_expense');

        $expenseHead = is_string($request->input('expense_head_id')) && $request->input('expense_head_id') === 'null' ? null : $request->input('expense_head_id');

        if (isset($expenseHead)) {
            $query->where('type_id', $expenseHead);
        }

        if ($request->has('from') && $request->input('to')) {
            $query->whereDate('transaction_date', '>=', $request->input('from'))
                ->whereDate('transaction_date', '<=', $request->input('to'));
        }

        $expenses = $query->with('generalExpense')->orderBy('transaction_date', 'desc')->get();

        $invoice = create_invoice('general-expenses');

        $pdf = Pdf::loadView('pdf.general-expenses', [
            'expenses' => $expenses,
            'invoice' => $invoice,
        ])->setPaper('a4', 'portrait');

        $timestamp = now()->format('Y-m-d_H-i-s');
        return $pdf->download("general-expenses_{$timestamp}.pdf");
    }

    public function donorsDonations(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');
        $donorIds = $request->input('donor_ids');

        // also map through payment methods to ensure they are in the correct format
        $query = Transaction::with('donor', 'paymentMethod')
            ->where('transaction_type', 'donation')
            ->where('type', 'donor')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->when($donorIds, fn($q) => $q->where('type_id', $donorIds))
            ->orderByDesc('transaction_date');

        $transactions = $query->paginate(20)->withQueryString();

        return Inertia::render('Reports/DonorsDonations', [
            'transactions' => $transactions,
            'from' => $from,
            'to' => $to,
            'donors' => Donor::select('id', 'full_name')->orderBy('full_name')->get(),
            'selectedDonors' => $donorIds,
        ]);
    }

    public function exportDonorsDonations(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');
        $donorIds = $request->input('donor_ids');
        $donorIds = is_string($donorIds) ? explode(',', $donorIds) : $donorIds;

        $query = Transaction::with('donor', 'paymentMethod')
            ->where('transaction_type', 'donation')
            ->where('type', 'donor')
            ->when($from, fn($q) => $q->whereDate('transaction_date', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('transaction_date', '<=', $to))
            ->when($donorIds, fn($q) => $q->whereIn('type_id', $donorIds))
            ->orderByDesc('transaction_date');

        $transactions = $query->get();

        $invoice = create_invoice('donor-donation');

        $pdf = Pdf::loadView('pdf.donors-donations', [
            'transactions' => $transactions,
            'from' => $from,
            'to' => $to,
            'invoice' => $invoice,
        ])->setPaper('a4', 'portrait');

        $timestamp = now()->format('Y-m-d_H-i-s');
        return $pdf->download("donors-donations_{$timestamp}.pdf");
    }
}
