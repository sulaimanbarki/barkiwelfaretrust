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
        $this->middleware('permission:view-payment-method|create-payment-method|edit-payment-method|delete-payment-method', ['only' => ['index', 'store']]);
        $this->middleware('permission:create-payment-method', ['only' => ['create', 'store']]);
        $this->middleware('permission:edit-payment-method', ['only' => ['edit', 'update']]);
        $this->middleware('permission:delete-payment-method', ['only' => ['destroy']]);
    }

    public function index(): Response
    {
        return Inertia::render('PaymentMethods/Index', [
            'filters' => Request::all('search', 'trashed'),
            'payment_methods' => PaymentMethod::query()
                ->orderBy('name')
                ->filter(Request::only('search', 'trashed'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn($method) => [
                    'id' => $method->id,
                    'name' => $method->name,
                    'is_active' => $method->is_active,
                    'deleted_at' => $method->deleted_at,
                ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('PaymentMethods/Create');
    }

    public function store(): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'name' => ['required', 'string', 'max:255'],
            'is_active' => ['required', 'boolean'],
        ]);

        PaymentMethod::create(Request::all());

        return redirect()->route('payment-methods.index')->with('success', 'Payment method created.');
    }

    public function edit(PaymentMethod $paymentMethod): Response
    {
        return Inertia::render('PaymentMethods/Edit', [
            'payment_method' => $paymentMethod,
        ]);
    }

    public function update(PaymentMethod $paymentMethod): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'name' => ['required', 'string', 'max:255'],
            'is_active' => ['required', 'boolean'],
        ]);

        $paymentMethod->update(Request::all());

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
