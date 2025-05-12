<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Donor;
use Inertia\Response;
use App\Models\Program;
use App\Models\Campaign;
use App\Models\Donation;
use App\Models\Expense;
use App\Models\Beneficiary;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Index', [
            'stats' => [
                'donors' => Donor::count(),
                'beneficiaries' => Beneficiary::count(),
                 'campaigns' => Campaign::count(),
                 'donations' => Donation::count(),
                 'expenses' => Expense::count(),
                 'programs' => Program::count(),
                ]
        ]);
    }
}
