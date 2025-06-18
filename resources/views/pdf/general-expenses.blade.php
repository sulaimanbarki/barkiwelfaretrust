@extends('pdf.layout')

@section('title', 'General Expenses Report')

@section('header_id')
    Report ID: {{ $invoice->invoice_number }}
@endsection


@section('content')
    <h3>General Expenses</h3>

    <table class="products">
        <thead>
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Expense Head</th>
                <th>Amount</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($expenses as $expense)
                <tr>
                    <td>{{ $expense->id }}</td>
                    <td>{{ $expense->transaction_date }}</td>
                    <td>{{ $expense->generalExpense->name ?? 'N/A' }}</td>
                    <td>{{ number_format($expense->amount, 2) }}</td>
                    <td>{{ $expense->description }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="5" style="text-align: center;">No data found.</td>
                </tr>
            @endforelse
        </tbody>
    </table>

    <div class="total">
        Total: {{ number_format($expenses->sum('amount'), 2) }}
    </div>
@endsection
@section('styles')
    <style>
        .products th, .products td {
            padding: 8px;
            text-align: left;
        }
        .products th {
            background-color: #f2f2f2;
        }
        .total {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
@endsection