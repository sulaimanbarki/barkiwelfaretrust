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
                'programs' => Program::count(),
                'donations' => Transaction::where('transaction_type', 'donation')->sum('amount'),
                'expenses' => Transaction::where('transaction_type', 'expense')->sum('amount'),
                'today_donations' => Transaction::where('transaction_type', 'donation')->whereDate('created_at', now())->sum('amount'),
                'today_expenses' => Transaction::where('transaction_type', 'expense')->whereDate('created_at', now())->sum('amount'),
            ]
        ]);
    }
}
