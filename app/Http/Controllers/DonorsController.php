<?php

namespace App\Http\Controllers;

use App\Models\City;
use Inertia\Inertia;
use App\Models\Donor;
use Inertia\Response;
use App\Models\Country;
use Illuminate\Support\Facades\Request;
use App\Models\PaymentMethod;



class DonorsController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:view-donor|create-donor|edit-donor|delete-donor', ['only' => ['index', 'store']]);
        $this->middleware('permission:create-donor', ['only' => ['create', 'store']]);
        $this->middleware('permission:edit-donor', ['only' => ['edit', 'update']]);
        $this->middleware('permission:delete-donor', ['only' => ['destroy']]);
    }

    public function index(): \Inertia\Response
    {
        return Inertia::render('Donors/Index', [
            'filters' => Request::all('search', 'trashed'),
            'donors' => Donor::query()
                ->orderBy('full_name')
                ->filter(Request::only('search', 'trashed'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn($donor) => [
                    'id' => $donor->id,
                    'full_name' => $donor->full_name,
                    'phone' => $donor->phone,
                    'city' => $donor->city->name ?? null, // city relation
                    'payment_method' => $donor->payment_method,
                    'deleted_at' => $donor->deleted_at,
                ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Donors/Create', [
            'countries' => Country::all(),
            'cities' => City::all(),
            'paymentMethods' => PaymentMethod::select('id', 'name')->get(),
        ]);
    }

    public function store(): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'full_name' => ['required', 'max:50'],
            'monthly_donation' => ['required', 'numeric'],
            'donor_type' => ['required', 'string'],
            'email' => ['nullable', 'max:50', 'email'],
            'phone' => ['nullable', 'max:50'],
            'address' => ['nullable', 'max:150'],
            'city_id' => ['nullable', 'exists:cities,id'],
            'country_id' => ['nullable', 'exists:countries,id'],
            'payment_method' => ['nullable', 'string', 'max:100'],
        ]);

        Donor::create(Request::all());

        return redirect()->route('donors.index')->with('success', 'Donor created.');
    }

    public function edit(Donor $donor): Response
    {
        return Inertia::render('Donors/Edit', [
            'donor' => $donor,
            'countries' => Country::all(),
            'cities' => City::all(),
            'paymentMethods' => PaymentMethod::select('id', 'name')->get(),
        ]);
    }
    
    public function update(Donor $donor): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'full_name' => ['required', 'max:50'],
            'monthly_donation' => ['required', 'numeric'],
            'donor_type' => ['nullable', 'string'],
            'email' => ['nullable', 'max:50', 'email'],
            'phone' => ['nullable', 'max:50'],
            'address' => ['nullable', 'max:150'],
            'city_id' => ['nullable', 'exists:cities,id'],
            'country_id' => ['nullable', 'exists:countries,id'],
            'payment_method' => ['nullable', 'string', 'max:100'],
        ]);

        $donor->update(Request::all());

        return redirect()->route('donors.index')->with('success', 'Donor updated.');
    }

    public function destroy(Donor $donor): \Illuminate\Http\RedirectResponse
    {
        $donor->delete();

        return redirect()->route('donors.index')->with('success', 'Donor deleted.');
    }

    public function restore(Donor $donor): \Illuminate\Http\RedirectResponse
    {
        $donor->restore();

        return redirect()->route('donors.index')->with('success', 'Donor restored.');
    }
}
