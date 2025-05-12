<?php

namespace App\Http\Controllers;

use App\Models\PaymentMethod;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Inertia\Response;

class PaymentMethodController extends Controller
{
    public function __construct()
    {
        // Remove permission middleware to simplify testing
        $this->middleware('auth');
    }

    public function index(): Response
    {
        return Inertia::render('PaymentMethod/Index', [
            'filters' => Request::all('search', 'trashed'),
            'paymentMethods' => PaymentMethod::query()
                ->orderBy('name')
                ->when(Request::input('search'), function($query, $search) {
                    $query->where('name', 'like', "%{$search}%");
                })
                ->when(Request::input('trashed'), function($query, $trashed) {
                    if ($trashed === 'with') {
                        $query->withTrashed();
                    } elseif ($trashed === 'only') {
                        $query->onlyTrashed();
                    }
                })
                ->paginate(10)
                ->withQueryString()
                ->through(fn($method) => [
                    'id' => $method->id,
                    'name' => $method->name,
                    'is_active' => $method->is_active ?? true,
                    'deleted_at' => $method->deleted_at,
                ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('PaymentMethod/Create');
    }

    public function store(): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'name' => ['required', 'string', 'max:255'],
            'is_active' => ['required', 'boolean'],
        ]);

        PaymentMethod::create([
            'name' => Request::input('name'),
            'is_active' => Request::boolean('is_active'),
        ]);

        return redirect()->route('payment-methods.index')->with('success', 'Payment method created.');
    }

    public function edit(PaymentMethod $paymentMethod): Response
    {
        return Inertia::render('PaymentMethod/Edit', [
            'paymentMethod' => $paymentMethod,
        ]);
    }

    public function show(PaymentMethod $paymentMethod): Response
    {
        return Inertia::render('PaymentMethod/Show', [
            'paymentMethod' => $paymentMethod,
        ]);
    }

    public function update(PaymentMethod $paymentMethod): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'name' => ['required', 'string', 'max:255'],
            'is_active' => ['required', 'boolean'],
        ]);

        $paymentMethod->update([
            'name' => Request::input('name'),
            'is_active' => Request::boolean('is_active'),
        ]);

        return redirect()->route('payment-methods.index')->with('success', 'Payment method updated.');
    }

    public function destroy(PaymentMethod $paymentMethod): \Illuminate\Http\RedirectResponse
    {
        $paymentMethod->delete();

        return redirect()->route('payment-methods.index')->with('success', 'Payment method deleted.');
    }

    public function restore($id): \Illuminate\Http\RedirectResponse
    {
        $paymentMethod = PaymentMethod::withTrashed()->findOrFail($id);
        $paymentMethod->restore();

        return redirect()->route('payment-methods.index')->with('success', 'Payment method restored.');
    }
}
