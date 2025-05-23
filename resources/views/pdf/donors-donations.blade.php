<!doctype html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Donation Report</title>

    <style>
        h4 {
            margin: 0;
        }

        .w-full {
            width: 100%;
        }

        .w-half {
            width: 50%;
        }

        .margin-top {
            margin-top: 1.25rem;
        }

        .footer {
            font-size: 0.875rem;
            padding: 1rem;
            background-color: rgb(241 245 249);
        }

        table {
            width: 100%;
            border-spacing: 0;
        }

        table.products {
            font-size: 0.875rem;
        }

        table.products tr {
            background-color: rgb(96 165 250);
        }

        table.products th {
            color: #ffffff;
            padding: 0.5rem;
        }

        table tr.items {
            background-color: rgb(241 245 249);
        }

        table tr.items td {
            padding: 0.5rem;
        }

        .total {
            text-align: right;
            margin-top: 1rem;
            font-size: 0.875rem;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        table.products th {
            color: #ffffff;
            /* padding: 0.5rem; */
            text-align: left;
        }
        table.products td {
            padding: 0.5rem;
            border-bottom: 1px solid #ddd;
        }
    </style>

</head>

<body>
    <table class="w-full">
        <tr>
            <td class="w-half">
                <img src="{{ public_path('logo.png') }}" alt="laravel daily" width="150" />
            </td>
            <td class="w-half">
                <h2>Invoice ID: 834847473</h2>
            </td>
        </tr>
    </table>

    {{-- <div class="margin-top">
        <table class="w-full">
            <tr>
                <td class="w-half">
                    <div>
                        <h4>To:</h4>
                    </div>
                    <div>John Doe</div>
                    <div>123 Acme Str.</div>
                </td>
                <td class="w-half">
                    <div>
                        <h4>From:</h4>
                    </div>
                    <div>Laravel Daily</div>
                    <div>London</div>
                </td>
            </tr>
        </table>
    </div> --}}

    <div class="margin-top">
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
                        <td colspan="4" style="text-align: center;">No donations found.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="total">
        Total:
        {{ number_format($transactions->sum('amount'), 2) }}
    </div>

    <div class="footer margin-top">
        <div>Thank you</div>
        <div>&copy; {{ env('APP_NAME') }}</div>
    </div>
</body>

</html>
