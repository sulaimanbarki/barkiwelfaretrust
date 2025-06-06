@extends('pdf.layout')

@section('title', 'Donation Report')

@section('header_id')
    Invoice ID: {{ $invoice->invoice_number }}
@endsection

@section('content')
    <table class="products">
        <thead>
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Donor</th>
                <th>Amount</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($transactions as $transaction)
                <tr>
                    <td>{{ $transaction->id }}</td>
                    <td>{{ $transaction->transaction_date }}</td>
                    <td>{{ $transaction->donor->full_name ?? 'N/A' }}</td>
                    <td>{{ number_format($transaction->amount, 2) }}</td>
                    <td>{{ $transaction->description }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="5" style="text-align: center;">No donations found.</td>
                </tr>
            @endforelse
        </tbody>
    </table>

    <div class="total">
        Total: {{ number_format($transactions->sum('amount'), 2) }}
    </div>
@endsection
