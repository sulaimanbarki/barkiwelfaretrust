<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Beneficiary extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'full_name',
        'phone',
        'email',
        'address',
        'city_id',
        'country_id',
        'notes',
        'cnic_num',
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('full_name', 'like', '%' . $search . '%')
                ->orWhere('phone', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%');
        });

        if (isset($filters['trashed']) && $filters['trashed'] === 'with') {
            $query->withTrashed();
        } elseif (isset($filters['trashed']) && $filters['trashed'] === 'only') {
            $query->onlyTrashed();
        }
    }

}
