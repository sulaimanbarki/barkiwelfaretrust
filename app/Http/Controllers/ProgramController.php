<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProgramController extends Controller
{
    public function __construct()
    {
        // Remove permission requirements to allow all authenticated users to access program functionality
        // Add auth middleware to ensure users are logged in
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

    public function show(Program $program)
    {
        return Inertia::render('Programs/Show', [
            'program' => $program,
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
}
