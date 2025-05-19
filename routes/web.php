<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CommonController;
use App\Http\Controllers\DonorsController;
use App\Http\Controllers\ImagesController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\ProgramsController;
use App\Http\Controllers\CampaignsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BeneficiaryController;
use App\Http\Controllers\OrganizationsController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ExpenseHeadController;
use App\Http\Controllers\PaymentMethodController;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth

Route::get('login', [AuthenticatedSessionController::class, 'create'])
    ->name('login')
    ->middleware('guest');

Route::post('login', [AuthenticatedSessionController::class, 'store'])
    ->name('login.store')
    ->middleware('guest');

Route::delete('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

// Dashboard

Route::get('/', [DashboardController::class, 'index'])
    ->name('dashboard')
    ->middleware('auth');

// Users

Route::middleware('auth')->group(function () {
    Route::get('users', [UsersController::class, 'index'])->name('users');
    Route::get('users/create', [UsersController::class, 'create'])->name('users.create');
    Route::post('users', [UsersController::class, 'store'])->name('users.store');
    Route::get('users/{user}/edit', [UsersController::class, 'edit'])->name('users.edit');
    Route::put('users/{user}', [UsersController::class, 'update'])->name('users.update');
    Route::delete('users/{user}', [UsersController::class, 'destroy'])->name('users.destroy');
    Route::put('users/{user}/restore', [UsersController::class, 'restore'])->name('users.restore');

    Route::get('organizations', [OrganizationsController::class, 'index'])->name('organizations');
    Route::get('organizations/create', [OrganizationsController::class, 'create'])->name('organizations.create');
    Route::post('organizations', [OrganizationsController::class, 'store'])->name('organizations.store');
    Route::get('organizations/{organization}/edit', [OrganizationsController::class, 'edit'])->name('organizations.edit');
    Route::put('organizations/{organization}', [OrganizationsController::class, 'update'])->name('organizations.update');
    Route::delete('organizations/{organization}', [OrganizationsController::class, 'destroy'])->name('organizations.destroy');
    Route::put('organizations/{organization}/restore', [OrganizationsController::class, 'restore'])->name('organizations.restore');

    Route::get('contacts', [ContactsController::class, 'index'])->name('contacts');
    Route::get('contacts/create', [ContactsController::class, 'create'])->name('contacts.create');
    Route::post('contacts', [ContactsController::class, 'store'])->name('contacts.store');
    Route::get('contacts/{contact}/edit', [ContactsController::class, 'edit'])->name('contacts.edit');
    Route::put('contacts/{contact}', [ContactsController::class, 'update'])->name('contacts.update');
    Route::delete('contacts/{contact}', [ContactsController::class, 'destroy'])->name('contacts.destroy');
    Route::put('contacts/{contact}/restore', [ContactsController::class, 'restore'])->name('contacts.restore');

    Route::resource('donors', DonorsController::class);
    Route::get('/donors/{donor}/defaults', [DonorsController::class, 'defaults']);

    Route::resource('roles', RolesController::class);
    Route::resource('campaigns', CampaignsController::class);
    Route::resource('beneficiaries', BeneficiaryController::class);
    Route::resource('donations', DonationController::class);
    Route::resource('programs', ProgramController::class);
    Route::post('/programs/{program}/transactions', [ProgramController::class, 'transactionStore']);
    Route::resource('expenseheads', ExpenseHeadController::class);

    Route::put('programs/{id}/restore', [ProgramController::class, 'restore'])->name('programs.restore');
    Route::resource('expenses', ExpenseController::class);

    // Payment Methods Routes
    // Route::get('payment-methods', [PaymentMethodController::class, 'index'])->name('payment-methods.index');
    // Route::get('payment-methods/create', [PaymentMethodController::class, 'create'])->name('payment-methods.create');
    // Route::post('payment-methods', [PaymentMethodController::class, 'store'])->name('payment-methods.store');
    // Route::get('payment-methods/{paymentMethod}', [PaymentMethodController::class, 'show'])->name('payment-methods.show');
    // Route::get('payment-methods/{paymentMethod}/edit', [PaymentMethodController::class, 'edit'])->name('payment-methods.edit');
    // Route::put('payment-methods/{paymentMethod}', [PaymentMethodController::class, 'update'])->name('payment-methods.update');
    // Route::delete('payment-methods/{paymentMethod}', [PaymentMethodController::class, 'destroy'])->name('payment-methods.destroy');
    Route::resource('payment-methods', PaymentMethodController::class)->except(['show']);
    Route::put('payment-methods/{id}/restore', [PaymentMethodController::class, 'restore'])->name('payment-methods.restore');


    Route::prefix('reports')->controller(ReportsController::class)->group(function () {
        Route::get('/donations-by-date', 'donationsByDate')->name('reports.donations_by_date');
        Route::get('/expenses-by-program', 'expensesByProgram');
        Route::get('/donations-by-campaign', 'donationsByCampaign');
        Route::get('/financial-summary', 'financialSummary');
        Route::get('/campaign-progress', 'campaignProgress');
        Route::get('/beneficiaries-by-program', 'beneficiariesByProgram');
        Route::get('/beneficiaries-by-program/{programId}/details', 'beneficiariesByProgramDetail');
        Route::get('/top-donors', 'topDonors');
        Route::get('/current-balance', 'currentBalance');
        Route::get('/donors-donations', 'donorsDonations');
    });
});

Route::get('reports', [ReportsController::class, 'index'])
    ->name('reports')
    ->middleware('auth');

// Images

Route::get('/img/{path}', [ImagesController::class, 'show'])
    ->where('path', '.*')
    ->name('image');

// routes/web.php
Route::get('/countries/{country}/cities', [CommonController::class, 'cities']);






Route::get('/run-command/{command}', function ($command) {
    // Optional: whitelist allowed commands
    $allowedCommands = [
        'migrate',
        'optimize',
        'config:clear',
        'cache:clear',
        'route:clear',
        'view:clear',
        'queue:restart',
    ];

    if (!in_array($command, $allowedCommands)) {
        abort(403, 'Unauthorized command');
    }

    Artisan::call($command);

    return response()->json([
        'status' => 'success',
        'message' => "Command '$command' executed successfully.",
    ], 200);

})->name('run.command');
