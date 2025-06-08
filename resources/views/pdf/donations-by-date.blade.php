@extends('pdf.layout')

@section('title', 'Donations by Date Report')

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
    <table class="products">
        <thead>
            <tr>
                <th>Date</th>
                <th>Payment Method</th>
                <th>Total Donations</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($donations as $donation)
                <tr>
                    <td>{{ $donation->transaction_date }}</td>
                    <td>{{ $donation->payment_method_name ?? 'N/A' }}</td>
                    <td>{{ number_format($donation->total, 2) }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="3" style="text-align: center;">No data found.</td>
                </tr>
            @endforelse
        </tbody>
    </table>

    <div class="total">
        Total: {{ number_format($donations->sum('total'), 2) }}
    </div>
@endsection
