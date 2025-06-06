@extends('pdf.layout')

@section('title', 'Beneficiaries Report')

@section('header_id')
    Report ID: {{ $invoice->invoice_number }}
@endsection

@section('header_extra')
    @if ($from || $to)
        <div>Date range:
            {{ $from ? \Carbon\Carbon::parse($from)->format('Y-m-d') : '...' }} –
            {{ $to ? \Carbon\Carbon::parse($to)->format('Y-m-d') : '...' }}
        </div>
    @endif
@endsection

@section('content')
    <h3>Program: {{ $program->name }}</h3>

    <table class="products">
        <thead>
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Beneficiary</th>
                <th>Amount</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($transactions as $transaction)
                <tr>
                    <td>{{ $transaction->id }}</td>
                    <td>{{ $transaction->transaction_date }}</td>
                    <td>{{ $transaction->beneficiary->full_name ?? 'N/A' }}</td>
                    <td>{{ number_format($transaction->amount, 2) }}</td>
                    <td>{{ $transaction->description }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="5" style="text-align: center;">No data found.</td>
                </tr>
            @endforelse
        </tbody>
    </table>

    <div class="total">
        Total: {{ number_format($transactions->sum('amount'), 2) }}
    </div>
@endsection
