<?php

use Illuminate\Support\Facades\Route;
use App\Models\Country;

    Route::get('/countries/{country}/cities', function (Country $country) {
        return $country->cities()->get(['id', 'name as text']); // Select2 expects 'text' by default
    });
