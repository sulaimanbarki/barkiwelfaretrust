<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

class CommonController extends Controller
{
    public function cities(Request $request, $country)
    {
        $cities = City::where('country_id', $country)->get(['id', 'name']);
        return response()->json($cities);
    }
}
