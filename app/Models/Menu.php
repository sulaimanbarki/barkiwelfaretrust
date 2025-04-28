<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission;

class Menu extends Model
{
    protected $fillable = [
        'name',
        'icon',
        'route',
    ];

    public function getRouteAttribute($value)
    {
        return $value ? route($value) : null;
    }

    // permissions
    public function permissions()
    {
        return $this->hasMany(Permission::class);
    }
}
