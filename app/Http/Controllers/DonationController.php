<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class DonationController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:view-donation|create-donation|edit-donation|delete-donation', ['only' => ['index', 'store']]);
        $this->middleware('permission:create-donation', ['only' => ['create', 'store']]);
        $this->middleware('permission:edit-donation', ['only' => ['edit', 'update']]);
        $this->middleware('permission:delete-donation', ['only' => ['destroy']]);
    }

    public function index()
    {
        $filters = Request::all('search', 'trashed');

        $donations = Donation::query()
            ->orderByDesc('donation_date')
            ->filter(Request::only('search', 'trashed'))
            ->paginate(10)
            ->withQueryString()
            ->through(fn($donation) => [
                'id' => $donation->id,
                'amount' => $donation->amount,
                'donation_date' => $donation->donation_date,
                'payment_method' => $donation->payment_method,
                'reference_no' => $donation->reference_no,
                'purpose' => $donation->purpose,
                'type' => $donation->type,
                'type_id' => $donation->type_id,
                'type_name' => match ($donation->type) {
                    'donor' => optional(\App\Models\Donor::find($donation->getRawOriginal('type_id')))->full_name,
                    'campaign' => optional(\App\Models\Campaign::find($donation->getRawOriginal('type_id')))->title,
                    default => null,
                },
                'deleted_at' => $donation->deleted_at,
            ]);

        return Inertia::render('Donations/Index', [
            'donations' => $donations,
            'filters' => $filters,
        ]);
    }

    public function create()
    {
        return Inertia::render(
            'Donations/Create',
            [
                'donors' => \App\Models\Donor::all(),
                'campaigns' => \App\Models\Campaign::all(),
            ]
        );
    }

    public function store(): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'amount' => ['required', 'numeric'],
            'donation_date' => ['required', 'date'],
            'payment_method' => ['required', 'string'],
            'reference_no' => ['nullable', 'string'],
            'purpose' => ['nullable', 'string'],
            'type' => ['required', 'string'], // 'donor' or 'campaign'
            'type_id' => ['required', 'integer'],
        ]);

        $donatableType = match (Request::input('type')) {
            'donor' => 1,
            'campaign' => 2,
            default => null,
        };

        if (!$donatableType) {
            return redirect()->back()->withErrors(['type' => 'Invalid donation type.']);
        }

        Donation::create([
            'amount' => Request::input('amount'),
            'donation_date' => Request::input('donation_date'),
            'payment_method' => Request::input('payment_method'),
            'reference_no' => Request::input('reference_no'),
            'purpose' => Request::input('purpose'),
            'type' => Request::input('type'),
            'type_id' => Request::input('type_id'),
        ]);

        return redirect()->route('donations.index')->with('success', 'Donation created.');
    }

    public function edit(Donation $donation)
    {
        return Inertia::render('Donations/Edit', [
            'donation' => $donation,
            'donors' => \App\Models\Donor::all(),
            'campaigns' => \App\Models\Campaign::all(),
            'type' => $donation->type,
        ]);
    }

    public function update(Donation $donation): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'amount' => ['required', 'numeric'],
            'donation_date' => ['required', 'date'],
            'payment_method' => ['required', 'string'],
            'reference_no' => ['nullable', 'string'],
            'purpose' => ['nullable', 'string'],
            'type' => ['required', 'string'], // 'donor' or 'campaign'
            'type_id' => ['required', 'integer'],
        ]);

        $donation->update([
            'amount' => Request::input('amount'),
            'donation_date' => Request::input('donation_date'),
            'payment_method' => Request::input('payment_method'),
            'reference_no' => Request::input('reference_no'),
            'purpose' => Request::input('purpose'),
            'type_id' => Request::input('type_id'),
        ]);

        return redirect()->route('donations.index')->with('success', 'Donation updated.');
    }

    public function destroy(Donation $donation)
    {
        $donation->delete();

        return redirect()->route('donations.index')->with('success', 'Donation deleted.');
    }

    public function restore($id)
    {
        $donation = Donation::withTrashed()->findOrFail($id);
        $donation->restore();

        return redirect()->route('donations.index')->with('success', 'Donation restored.');
    }
}
