<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class UsersController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Users/Index', [
            'filters' => Request::all('search', 'role', 'trashed'),
            'users' => Auth::user()->account->users()
                ->orderByName()
                ->filter(Request::only('search', 'role', 'trashed'))
                ->get()
                ->transform(fn ($user) => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    // 'owner' => $user->owner,
                    'photo' => $user->photo_path ? URL::route('image', ['path' => $user->photo_path, 'w' => 40, 'h' => 40, 'fit' => 'crop']) : null,
                    'deleted_at' => $user->deleted_at,
                    'role' => $user->roles->first() ? $user->roles->first()->id : null,
                    'role_name' => $user->roles->first() ? $user->roles->first()->name : null,
                ]),
        ]);
    }

    public function create(): Response
    {
        $roles = Role::all();
        return Inertia::render('Users/Create', [
            'roles' => $roles,
        ]);
    }

    public function store(): RedirectResponse
    {
        Request::validate([
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email', Rule::unique('users')],
            'password' => ['nullable'],
            // 'owner' => ['required', 'boolean'],
            'photo' => ['nullable', 'image'],
        ]);

        $user = User::create([
            'account_id' => Auth::user()->account->id,
            'first_name' => Request::get('first_name'),
            'last_name' => Request::get('last_name'),
            'email' => Request::get('email'),
            'password' => Request::get('password'),
            'owner' => 1,
            'photo_path' => Request::file('photo') ? Request::file('photo')->store('users') : null,
        ]);

        $role = Role::find(Request::input('role'));

        if (!$role) {
            return Redirect::back()->with('error', 'Role not found.');
        }
        
        $user->assignRole($role->name);

        return Redirect::route('users')->with('success', 'User created.');
    }

    public function edit(User $user): Response
    {
        return Inertia::render('Users/Edit', [
            'user' => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                // 'owner' => $user->owner,
                'photo' => $user->photo_path ? URL::route('image', ['path' => $user->photo_path, 'w' => 60, 'h' => 60, 'fit' => 'crop']) : null,
                'deleted_at' => $user->deleted_at,
                'role' => $user->roles->first() ? $user->roles->first()->id : null,
            ],
            'roles' => Role::all(),
        ]);
    }

    public function update(User $user): RedirectResponse
    {
        if (App::environment('demo') && $user->isDemoUser()) {
            return Redirect::back()->with('error', 'Updating the demo user is not allowed.');
        }

        Request::validate([
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email', Rule::unique('users')->ignore($user->id)],
            'password' => ['nullable'],
            // 'owner' => ['required', 'boolean'],
            'photo' => ['nullable', 'image'],
        ]);

        $user->update(Request::only('first_name', 'last_name', 'email'));

        if (Request::file('photo')) {
            $user->update(['photo_path' => Request::file('photo')->store('users')]);
        }

        if (Request::get('password')) {
            $user->update(['password' => Request::get('password')]);
        }

        $role = Role::find(Request::input('role'));
        if (!$role) {
            return Redirect::back()->with('error', 'Role not found.');
        }

        $user->syncRoles($role->name);

        return Redirect::back()->with('success', 'User updated.');
    }

    public function destroy(User $user): RedirectResponse
    {
        if (App::environment('demo') && $user->isDemoUser()) {
            return Redirect::back()->with('error', 'Deleting the demo user is not allowed.');
        }

        $user->delete();

        return Redirect::back()->with('success', 'User deleted.');
    }

    public function restore(User $user): RedirectResponse
    {
        $user->restore();

        return Redirect::back()->with('success', 'User restored.');
    }
}
