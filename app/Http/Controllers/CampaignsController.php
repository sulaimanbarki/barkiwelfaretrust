<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Inertia\Response;

class CampaignsController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:view-campaign|create-campaign|edit-campaign|delete-campaign', ['only' => ['index', 'store']]);
        $this->middleware('permission:create-campaign', ['only' => ['create', 'store']]);
        $this->middleware('permission:edit-campaign', ['only' => ['edit', 'update']]);
        $this->middleware('permission:delete-campaign', ['only' => ['destroy']]);
    }

    public function index(): Response
    {
        return Inertia::render('Campaigns/Index', [
            'filters' => Request::all('search', 'trashed'),
            'campaigns' => Campaign::query()
                ->orderBy('start_date', 'desc')
                ->filter(Request::only('search', 'trashed'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn($campaign) => [
                    'id' => $campaign->id,
                    'title' => $campaign->title,
                    'start_date' => $campaign->start_date,
                    'end_date' => $campaign->end_date,
                    'target_amount' => $campaign->target_amount,
                    'status' => $campaign->status,
                    'deleted_at' => $campaign->deleted_at,
                ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Campaigns/Create');
    }

    public function store(): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'title' => ['required', 'max:100'],
            'description' => ['nullable', 'string'],
            'start_date' => ['nullable', 'date'],
            'end_date' => ['nullable', 'date'],
            'target_amount' => ['nullable', 'numeric'],
            'status' => ['required', 'in:active,completed,cancelled'],
        ]);

        Campaign::create(Request::all());

        return redirect()->route('campaigns.index')->with('success', 'Campaign created.');
    }

    public function edit(Campaign $campaign): Response
    {
        return Inertia::render('Campaigns/Edit', [
            'campaign' => $campaign,
        ]);
    }

    public function update(Campaign $campaign): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'title' => ['required', 'max:100'],
            'description' => ['nullable', 'string'],
            'start_date' => ['nullable', 'date'],
            'end_date' => ['nullable', 'date'],
            'target_amount' => ['nullable', 'numeric'],
            'status' => ['required', 'in:active,inactive,completed,cancelled'],
        ]);

        $campaign->update(Request::all());

        return redirect()->route('campaigns.index')->with('success', 'Campaign updated.');
    }

    public function destroy(Campaign $campaign): \Illuminate\Http\RedirectResponse
    {
        $campaign->delete();

        return redirect()->route('campaigns.index')->with('success', 'Campaign deleted.');
    }

    public function restore(Campaign $campaign): \Illuminate\Http\RedirectResponse
    {
        $campaign->restore();

        return redirect()->route('campaigns.index')->with('success', 'Campaign restored.');
    }
}
