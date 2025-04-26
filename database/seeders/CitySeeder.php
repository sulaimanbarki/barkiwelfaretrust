<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\Country;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pakistan = Country::where('name', 'Pakistan')->first();

        if (!$pakistan) {
            $this->command->warn("Pakistan not found in countries table. Please run CountrySeeder first.");
            return;
        }

        $cities = [
            'Islamabad', 'Lahore', 'Karachi', 'Peshawar', 'Quetta', 'Rawalpindi',
            'Multan', 'Faisalabad', 'Hyderabad', 'Sialkot', 'Gujranwala', 'Bahawalpur',
            'Sargodha', 'Sukkur', 'Abbottabad', 'Mardan', 'Swat', 'Kohat', 'Dera Ismail Khan',
            'Gwadar', 'Mirpur', 'Skardu', 'Gilgit', 'Chitral'
        ];

        foreach ($cities as $city) {
            City::firstOrCreate([
                'name' => $city,
                'country_id' => $pakistan->id,
            ]);
        }
    }
}
