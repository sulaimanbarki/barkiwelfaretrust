<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Report')</title>

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

        table.products thead tr {
            background-color: rgb(96 165 250);
        }

        table.products th {
            color: #ffffff;
            padding: 0.5rem;
            text-align: left;
        }

        table.products td {
            padding: 0.5rem;
            border-bottom: 1px solid #ddd;
        }

        table tr.items {
            background-color: rgb(241 245 249);
        }

        .total {
            text-align: right;
            margin-top: 1rem;
            font-size: 0.875rem;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>

<body>
    {{-- Header --}}
    <table class="w-full" style="font-size: 0.85rem;">
        <tr>
            <td class="w-half" style="vertical-align: top;">
                <img src="{{ public_path('logo.png') }}" alt="Logo" width="100" />
            </td>
            <td class="w-half" style="text-align: right;">
                <h2 style="margin: 0;">
                    @yield('header_id', 'Invoice')
                </h2>
                <div><strong>{{ settings()->site_name }}</strong></div>
                <div>Contact: {{ settings()->contact_number }}</div>
                @yield('header_extra')
            </td>
        </tr>
    </table>

    {{-- Report Body --}}
    <div class="margin-top">
        @yield('content')
    </div>

    {{-- Footer --}}
    <div class="footer margin-top">
        <div>Thank you</div>
        <div>&copy; {{ env('APP_NAME') }}</div>
    </div>
</body>

</html>
