<?php

namespace App\Http\Controllers;

use App\Models\Beneficiary;
use Inertia\Inertia;
use App\Models\Program;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ProgramController extends Controller
{
    public function __construct()
    {
        
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $filters = $request->all('search', 'trashed');

        $programs = Program::query()
            ->orderByDesc('created_at')
            ->filter($request->only('search', 'trashed'))
            ->paginate(10)
            ->withQueryString()
            ->through(fn($program) => [
                'id' => $program->id,
                'name' => $program->name,
                'description' => $program->description,
                'deleted_at' => $program->deleted_at,
            ]);

        return Inertia::render('Programs/Index', [
            'programs' => $programs,
            'filters' => $filters,
        ]);
    }

    public function create()
    {
        Gate::authorize('create-program');
        return Inertia::render('Programs/Create');
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);

        Program::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);

        return redirect()->route('programs.index')->with('success', 'Program created.');
    }

    public function edit(Program $program)
    {
        return Inertia::render('Programs/Edit', [
            'program' => $program,
        ]);
    }

    public function show(Request $request, Program $program)
    {
        // load transactions related to the program
        $program->load([
            'transactions' => function ($query) {
                $query->orderByDesc('transaction_date');
            },
        ]);

        $program->total_amount = $program->transactions->sum('amount');
        $program->total_amount = number_format($program->total_amount, 2);

        $filters = $request->only('search');

        $transactions = Transaction::query()
            ->with(['beneficiary:id,full_name'])
            ->where('type', 'program')
            ->where('type_id', $program->id)
            ->orderByDesc('transaction_date')
            ->filter($filters)
            ->paginate(10)
            ->withQueryString();

        $beneficiaries = Beneficiary::select('id', 'full_name as name')->get();

        return Inertia::render('Programs/Show', [
            'program' => $program,
            'filters' => $filters,
            'transactions' => $transactions,
            'beneficiaries' => $beneficiaries,
        ]);
    }



    public function update(Request $request, Program $program): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);

        $program->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);

        return redirect()->route('programs.index')->with('success', 'Program updated.');
    }

    public function destroy(Program $program)
    {
        $program->delete();

        return redirect()->route('programs.index')->with('success', 'Program deleted.');
    }

    public function restore($id)
    {
        $program = Program::withTrashed()->findOrFail($id);
        $program->restore();

        return redirect()->route('programs.index')->with('success', 'Program restored.');
    }

    public function transactionStore(Request $request, Program $program)
    {
        $validated = $request->validate([
            'date' => 'required|date',
            'amount' => 'required|numeric',
            'beneficiary' => 'required|exists:beneficiaries,id',
            'reference_no' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        Transaction::create([
            'transaction_type' => 'expense',
            'type' => 'program',
            'type_id' => $program->id,
            'type_type_id' => $validated['beneficiary'],
            'amount' => $validated['amount'],
            'transaction_date' => $validated['date'],
            'payment_method' => null, // Or update if you plan to support this
            'reference_no' => $validated['reference_no'] ?? null,
            'description' => $validated['description'] ?? null,
        ]);

        return redirect()->back()->with('success', 'Transaction created successfully.');
    }
}
