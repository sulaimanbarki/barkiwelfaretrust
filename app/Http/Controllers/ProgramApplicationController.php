<?php

namespace App\Http\Controllers;

use App\Models\Program;
use App\Models\ProgramApplication;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as RequestFacade;

class ProgramApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Program $program)
    {
        $applications = ProgramApplication::query()
            ->where('program_id', $program->id)
            ->where('is_approved', false)
            ->when(RequestFacade::input('search'), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('father_name', 'like', "%{$search}%");
            })
            ->orderBy('date', 'asc')
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Programs/PendingList', [
            'program' => $program,
            'applications' => $applications,
            'filters' => RequestFacade::only(['search']),
        ]);
    }

    public function store(Request $request, Program $program)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'father_name' => 'required|string|max:255',
            'address' => 'required|string',
            'description' => 'nullable|string',
            'date' => 'required|date',
            'is_active' => 'boolean',
        ]);

        ProgramApplication::create([
            'program_id' => $program->id,
            'name' => $request->name,
            'father_name' => $request->father_name,
            'address' => $request->address,
            'description' => $request->description,
            'date' => $request->date,
            'is_active' => $request->boolean('is_active', true),
        ]);

        return redirect()->back()->with('success', 'Application added successfully.');
    }

    public function destroy(ProgramApplication $application)
    {
        $application->delete();
        return redirect()->back()->with('success', 'Application deleted successfully.');
    }

    public function approve(ProgramApplication $application)
    {
        $application->update(['is_approved' => true]);
        return redirect()->back()->with('success', 'Application approved successfully.');
    }
}
