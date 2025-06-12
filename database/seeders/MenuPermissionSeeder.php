<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Carbon\Carbon;

class MenuPermissionSeeder extends Seeder
{
    public function run(): void
    {
        $now = Carbon::now();

        $menus = [
            ['id' => 1, 'name' => 'Donors'],
            ['id' => 2, 'name' => 'Donation'],
            ['id' => 3, 'name' => 'Campaigns'], // fixed typo
            ['id' => 4, 'name' => 'Beneficiary'],
            ['id' => 8, 'name' => 'Expense'],
            ['id' => 9, 'name' => 'Reports'],
            ['id' => 10, 'name' => 'Programs'],
            ['id' => 11, 'name' => 'Roles'],
            ['id' => 12, 'name' => 'Payment Method'],
            ['id' => 13, 'name' => 'Expense Heads'],
        ];

        foreach ($menus as $menu) {
            DB::table('menus')->updateOrInsert(
                ['id' => $menu['id']],
                [
                    'name' => $menu['name'],
                    'icon' => null,
                    'route' => null,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]
            );
        }

        $permissions = [
            1 => ['view-donor', 'create-donor', 'edit-donor', 'delete-donor'],
            2 => ['view-donation', 'create-donation', 'edit-donation', 'delete-donation'],
            3 => ['view-campaign', 'create-campaign', 'edit-campaign', 'delete-campaign'],
            4 => ['view-beneficiary', 'create-beneficiary', 'edit-beneficiary', 'delete-beneficiary'],
            8 => ['view-expense', 'create-expense', 'edit-expense', 'delete-expense'],
            9 => ['view-report', 'create-report', 'edit-report', 'delete-report'],
            10 => ['view-program', 'create-program', 'edit-program', 'delete-program'],
            11 => ['view-role', 'create-role', 'edit-role', 'delete-role'],
            12 => ['view-payment-method', 'create-payment-method', 'edit-payment-method', 'delete-payment-method'],
            13 => ['view-expensehead', 'create-expensehead', 'edit-expensehead', 'delete-expensehead'],
        ];

        foreach ($permissions as $menuId => $perms) {
            foreach ($perms as $perm) {
                Permission::updateOrCreate(
                    ['name' => $perm, 'guard_name' => 'web'],
                    ['menu_id' => $menuId, 'created_at' => $now, 'updated_at' => $now]
                );
            }
        }
    }
}
