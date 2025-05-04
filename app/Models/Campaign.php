<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Campaign extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
        'target_amount',
        'status',
    ];

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('description', 'like', '%' . $search . '%');
        });

        if (isset($filters['trashed']) && $filters['trashed'] === 'with') {
            $query->withTrashed();
        } elseif (isset($filters['trashed']) && $filters['trashed'] === 'only') {
            $query->onlyTrashed();
        }
    }
}
