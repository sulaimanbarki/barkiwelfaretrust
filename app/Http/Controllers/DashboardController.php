<?php

namespace App\Http\Controllers;

use App\Models\Beneficiary;
use App\Models\Campaign;
use App\Models\Donor;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Index', [
            'stats' => [
                'donors' => Donor::count(),
                'beneficiaries' => Beneficiary::count(),
                'campaign' => Campaign::count(),
            ]
        ]);
    }
}
