<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Request;
use Spatie\Permission\Models\Permission;
use App\Models\Role as AppRole;

class RolesController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:view-role|create-role|edit-role|delete-role', ['only' => ['index', 'store']]);
        $this->middleware('permission:create-role', ['only' => ['create', 'store']]);
        $this->middleware('permission:edit-role', ['only' => ['edit', 'update']]);
        $this->middleware('permission:delete-role', ['only' => ['destroy']]);
    }

    public function index()
    {
        return Inertia::render('Roles/Index', [
            'filters' => Request::all('search', 'trashed'),
            'roles' => AppRole::query()
                ->orderBy('name')
                ->filter(Request::only('search', 'trashed'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn($role) => [
                    'id' => $role->id,
                    'name' => $role->name,
                    'guard_name' => $role->guard_name,
                    'deleted_at' => $role->deleted_at,
                ]),
        ]);
    }

    public function create()
    {
        $menus = Menu::with('permissions')->get();

        return Inertia::render('Roles/Create', [
            'menus' => $menus
        ]);
    }

    public function store()
    {
        Request::validate([
            'name' => ['required', 'string', 'max:50'],
            'permissions' => ['required', 'array'],
        ]);

        $role = Role::create([
            'name' => Request::input('name'),
            'guard_name' => 'web',
        ]);

        $role->syncPermissions(Request::input('permissions'));

        return redirect()->route('roles.index')->with('success', 'Role created.');
    }

    public function edit(Role $role)
    {
        $menus = Menu::with('permissions')->get();
        $role->load('permissions');

        return Inertia::render('Roles/Edit', [
            'role' => $role,
            'menus' => $menus,
        ]);
    }

    public function update(Role $role)
    {
        Request::validate([
            'name' => ['required', 'string', 'max:50'],
            'permissions' => ['required', 'array'],
        ]);

        $role->update([
            'name' => Request::input('name'),
            'guard_name' => 'web',
        ]);

        $role->syncPermissions(Request::input('permissions'));

        return redirect()->route('roles.index')->with('success', 'Role updated.');
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()->route('roles.index')->with('success', 'Role deleted.');
    }
    
    public function restore(Role $role)
    {
        $role->restore();

        return redirect()->route('roles.index')->with('success', 'Role restored.');
    }
}
