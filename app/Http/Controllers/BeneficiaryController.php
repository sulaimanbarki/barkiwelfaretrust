<?php

namespace App\Http\Controllers;

use App\Models\Beneficiary;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class BeneficiaryController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:view-beneficiary|create-beneficiary|edit-beneficiary|delete-beneficiary', ['only' => ['index', 'store']]);
        $this->middleware('permission:create-beneficiary', ['only' => ['create', 'store']]);
        $this->middleware('permission:edit-beneficiary', ['only' => ['edit', 'update']]);
        $this->middleware('permission:delete-beneficiary', ['only' => ['destroy']]);
    }

    public function index(Request $request)
    {
        $filters = Request::all('search', 'trashed');
        $beneficiaries = Beneficiary::query()
            ->orderBy('full_name', 'desc')
            ->filter(Request::only('search', 'trashed'))
            ->paginate(10)
            ->withQueryString()
            ->through(fn($beneficiary) => [
                'id' => $beneficiary->id,
                'full_name' => $beneficiary->full_name,
                'phone' => $beneficiary->phone,
                'email' => $beneficiary->email,
                'cnic_num' => $beneficiary->cnic_num,
                'address' => $beneficiary->address,
                'permanent_address' => $beneficiary->permanent_address,
                'city_id' => $beneficiary->city_id,
                'country_id' => $beneficiary->country_id,
                'notes' => $beneficiary->notes,
                'deleted_at' => $beneficiary->deleted_at,
            ]);

        return Inertia::render('Beneficiaries/Index', [
            'beneficiaries' => $beneficiaries,
            'filters' => $filters,
        ]);
    }

    public function create()
    {
        return Inertia::render('Beneficiaries/Create');
    }

    public function store(): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'full_name' => ['required', 'string', 'max:255'],
            'phone' => ['nullable', 'string'],
            'email' => ['nullable', 'email'],
            'address' => ['nullable', 'string'],
            'permanent_address' => ['nullable', 'string'],
            'city_id' => ['nullable', 'integer'],
            'country_id' => ['nullable', 'integer'],
            'notes' => ['nullable', 'string'],
        ]);
        Beneficiary::create(Request::all());

        return redirect()->route('beneficiaries.index')->with('success', 'Beneficiary created.');
    }

    public function edit(Beneficiary $beneficiary)
    {
        return Inertia::render('Beneficiaries/Edit', [
            'beneficiary' => $beneficiary,
        ]);
    }

    public function update(Beneficiary $beneficiary): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'full_name' => ['required', 'string', 'max:255'],
            'phone' => ['nullable', 'string'],
            'email' => ['nullable', 'email'],
            'address' => ['nullable', 'string'],
            'permanent_address' => ['nullable', 'string'],
            'city_id' => ['nullable', 'integer'],
            'country_id' => ['nullable', 'integer'],
            'notes' => ['nullable', 'string'],
        ]);

        $beneficiary->update(Request::all());

        return redirect()->route('beneficiaries.index')->with('success', 'Beneficiary updated.');
    }

    public function destroy(Beneficiary $beneficiary)
    {
        $beneficiary->delete();

        return redirect()->route('beneficiaries.index')->with('success', 'Beneficiary deleted.');
    }
}
