<?php

namespace App\Http\Controllers;

use App\Models\City;
use Inertia\Inertia;
use App\Models\Donor;
use Inertia\Response;
use App\Models\Country;
use Illuminate\Support\Facades\Request;


class DonorsController extends Controller
{
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
                    'deleted_at' => $donor->deleted_at,
                ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Donors/Create', [
            'countries' => Country::all(),
            'cities' => City::all(),
        ]);
    }
}
