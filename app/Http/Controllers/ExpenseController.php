<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Beneficiary;
use App\Models\Transaction;
use App\Models\PaymentMethod;
use Illuminate\Support\Facades\Request;

class ExpenseController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:view-expense|create-expense|edit-expense|delete-expense', ['only' => ['index', 'store']]);
        $this->middleware('permission:create-expense', ['only' => ['create', 'store']]);
        $this->middleware('permission:edit-expense', ['only' => ['edit', 'update']]);
        $this->middleware('permission:delete-expense', ['only' => ['destroy']]);
    }

    public function index()
    {
        $filters = Request::all('search', 'trashed');

        $expenses = Transaction::query()
            ->where('transaction_type', 'expense')
            ->orderByDesc('id')
            ->filter(Request::only('search', 'trashed'))
            ->paginate(10)
            ->withQueryString()
            ->through(fn($expense) => [
                'id' => $expense->id,
                'amount' => $expense->amount,
                'transaction_date' => $expense->transaction_date,
                'payment_method' => $expense->PaymentMethod->name ?? null,
                'reference_no' => $expense->reference_no,
                'description' => $expense->description,
                'type' => $expense->type,
                'type_id' => $expense->type_id,
                'type_name' => match ($expense->type) {
                    'program' => optional(\App\Models\Program::find($expense->getRawOriginal('type_id')))->name,
                    'beneficiary' => optional(\App\Models\Beneficiary::find($expense->getRawOriginal('type_id')))->full_name,
                    'general_expense' => optional(\App\Models\ExpenseHead::find($expense->getRawOriginal('type_id')))->name,
                    default => null,
                },
                'deleted_at' => $expense->deleted_at,
            ]);

        return Inertia::render('Expenses/Index', [
            'expenses' => $expenses,
            'filters' => $filters,
        ]);
    }

    public function create()
    {
        return Inertia::render('Expenses/Create', [
            'programs' => \App\Models\Program::all(),
            'beneficiaries' => Beneficiary::all()->map(function ($beneficiary) {
                return [
                    'id' => $beneficiary->id,
                    'full_name' => $beneficiary->full_name . ' - ' . ($beneficiary->father_name ?? ''),
                ];
            }),
            'paymentMethods' => PaymentMethod::select('id', 'name')->get(), // ✅ Send payment methods
            'expenseHeads' => \App\Models\ExpenseHead::select('id', 'name')->get(), // ✅ Send expense heads
        ]);
    }

    public function store(): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'amount' => ['required', 'numeric'],
            'transaction_date' => ['required', 'date'],
            'payment_method' => ['required'],
            'reference_no' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'type' => ['required', 'string'], // 'program' or 'beneficiary'
            'type_id' => ['required', 'integer'],
        ]);

        Transaction::create([
            'transaction_type' => 'expense',
            'amount' => Request::input('amount'),
            'transaction_date' => Request::input('transaction_date'),
            'payment_method' => Request::input('payment_method'),
            'reference_no' => Request::input('reference_no'),
            'description' => Request::input('description'),
            'type' => Request::input('type'),
            'type_id' => Request::input('type_id'),
        ]);

        return redirect()->route('expenses.index')->with('success', 'Expense recorded.');
    }

    public function edit(Transaction $expense)
    {
        return Inertia::render('Expenses/Edit', [
            'expense' => $expense,
            'programs' => \App\Models\Program::all(),
            'beneficiaries' => Beneficiary::all()->map(function ($beneficiary) {
                return [
                    'id' => $beneficiary->id,
                    'full_name' => $beneficiary->full_name . ' - ' . ($beneficiary->father_name ?? ''),
                ];
            }),
            'type' => $expense->type,
            'paymentMethods' => PaymentMethod::select('id', 'name')->get(), // ✅ Send payment methods
            'expenseHeads' => \App\Models\ExpenseHead::select('id', 'name')->get(), // ✅ Send expense heads
        ]);
    }

    public function update(Transaction $expense): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'amount' => ['required', 'numeric'],
            'transaction_date' => ['required', 'date'],
            'payment_method' => ['required'],
            'reference_no' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'type' => ['required', 'string'],
            'type_id' => ['required', 'integer'],
        ]);

        $expense->update([
            'amount' => Request::input('amount'),
            'transaction_date' => Request::input('transaction_date'),
            'payment_method' => Request::input('payment_method'),
            'reference_no' => Request::input('reference_no'),
            'description' => Request::input('description'),
            'type' => Request::input('type'),
            'type_id' => Request::input('type_id'),
        ]);

        return redirect()->route('expenses.index')->with('success', 'Expense updated.');
    }

    public function destroy(Transaction $expense)
    {
        $expense->delete();

        return redirect()->route('expenses.index')->with('success', 'Expense deleted.');
    }

    public function restore($id)
    {
        $expense = Transaction::withTrashed()->findOrFail($id);
        $expense->restore();

        return redirect()->route('expenses.index')->with('success', 'Expense restored.');
    }
}
