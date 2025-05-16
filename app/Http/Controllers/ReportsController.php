<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Transaction;
use Illuminate\Http\Request;

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

        $donations = Transaction::where('transaction_type', 'donation')
            ->whereBetween('created_at', [$from, $to])
            ->selectRaw('DATE(created_at) as date, SUM(amount) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        return Inertia::render('Reports/DonationsByDate', [
            'donations' => $donations,
            'from' => $from,
            'to' => $to,
        ]);
    }

    public function donationsByCampaign(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');

        $query = Transaction::where('transaction_type', 'donation')
            ->when($from, fn($q) => $q->whereDate('created_at', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('created_at', '<=', $to))
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
            ->when($from, fn($q) => $q->whereDate('created_at', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('created_at', '<=', $to))
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
            ->when($from, fn($q) => $q->whereDate('created_at', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('created_at', '<=', $to))
            ->sum('amount');

        $expenses = \App\Models\Transaction::where('transaction_type', 'expense')
            ->when($from, fn($q) => $q->whereDate('created_at', '>=', $from))
            ->when($to, fn($q) => $q->whereDate('created_at', '<=', $to))
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
}
