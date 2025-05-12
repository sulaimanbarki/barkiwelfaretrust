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
use App\Models\Transaction;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Index', [
            'stats' => [
                'donors' => Donor::count(),
                'beneficiaries' => Beneficiary::count(),
                'campaigns' => Campaign::count(),
                // sum amount of transaction_type='donation'
                'donations' => Transaction::where('transaction_type', 'donation')->sum('amount'),
                'expenses' => Transaction::where('transaction_type', 'expense')->sum('amount'),
                'programs' => Program::count(),
            ]
        ]);
    }
}
