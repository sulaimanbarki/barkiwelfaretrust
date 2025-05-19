<?php

namespace App\Http\Controllers;

use App\Models\ExpenseHead;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class ExpenseHeadController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:view-expensehead|create-expensehead|edit-expensehead|delete-expensehead', ['only' => ['index', 'store']]);
        $this->middleware('permission:create-expensehead', ['only' => ['create', 'store']]);
        $this->middleware('permission:edit-expensehead', ['only' => ['edit', 'update']]);
        $this->middleware('permission:delete-expensehead', ['only' => ['destroy']]);
    }

    public function index()
    {
        return Inertia::render('ExpenseHeads/Index', [
            'filters' => Request::all('search', 'trashed'),
            'expense_heads' => ExpenseHead::query()
                ->orderBy('name')
                ->filter(Request::only('search', 'trashed'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn($head) => [
                    'id' => $head->id,
                    'name' => $head->name,
                    'description' => $head->description,
                    'deleted_at' => $head->deleted_at,
                ]),
        ]);
    }

    public function create()
    {
        return Inertia::render('ExpenseHeads/Create');
    }

    public function store()
    {
        Request::validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string'],
        ]);

        ExpenseHead::create([
            'name' => Request::input('name'),
            'description' => Request::input('description'),
        ]);

        return redirect()->route('expenseheads.index')->with('success', 'Expense Head created.');
    }

    public function edit($id)
    {
        $expenseHead = ExpenseHead::findOrFail($id);

        return Inertia::render('ExpenseHeads/Edit', [
            'expenseHead' => $expenseHead,
        ]);
    }

    public function update(Request $request, $id)
    {
        Request::validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string'],
        ]);

        $expenseHead = ExpenseHead::findOrFail($id);
        
        $expenseHead->update([
            'name' => Request::input('name'),
            'description' => Request::input('description'),
        ]);

        return redirect()->route('expenseheads.index')->with('success', 'Expense Head updated.');
    }

    public function destroy(ExpenseHead $expenseHead)
    {
        $expenseHead->delete();

        return redirect()->route('expenseheads.index')->with('success', 'Expense Head deleted.');
    }

    public function restore($id)
    {
        $expenseHead = ExpenseHead::withTrashed()->findOrFail($id);
        $expenseHead->restore();

        return redirect()->route('expenseheads.index')->with('success', 'Expense Head restored.');
    }
}
