<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Program extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
    ];

    /**
     * Scope a query to filter programs based on search and trashed criteria.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  array  $filters
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            });
        });

        $query->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });

        return $query;
    }

    // transaction relationship
    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'type_id', 'id')
            ->where('type', 'program');
    }

    // program applications relationships
    public function applications()
    {
        return $this->hasMany(ProgramApplication::class);
    }

    public function pendingApplications()
    {
        return $this->hasMany(ProgramApplication::class)->where('is_approved', false);
    }
}
