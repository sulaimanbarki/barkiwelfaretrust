<?php

use App\Models\Invoice;
use Illuminate\Support\Facades\Auth;

if (!function_exists('create_invoice')) {
  function create_invoice(string $type): Invoice
  {
    $invoice = Invoice::create([
      'type' => $type,
      'user_id' => Auth::id(),
    ]);

    return $invoice;
  }
}

if (!function_exists('settings')) {
  function settings()
  {
    return app('settings');
  }
}
