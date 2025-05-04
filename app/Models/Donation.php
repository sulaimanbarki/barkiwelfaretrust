<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Donation extends Model
{
    use \Illuminate\Database\Eloquent\SoftDeletes;

    protected $fillable = [
        'type',
        'type_id',
        'amount',
        'donation_date',
        'payment_method',
        'reference_no',
        'purpose',
    ];

    // scopeFilter
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('type', 'like', '%' . $search . '%')
                ->orWhere('type_id', 'like', '%' . $search . '%')
                ->orWhere('amount', 'like', '%' . $search . '%')
                ->orWhere('donation_date', 'like', '%' . $search . '%')
                ->orWhere('payment_method', 'like', '%' . $search . '%')
                ->orWhere('reference_no', 'like', '%' . $search . '%')
                ->orWhere('purpose', 'like', '%' . $search . '%');
        });

        if (isset($filters['trashed']) && $filters['trashed'] === 'with') {
            $query->withTrashed();
        } elseif (isset($filters['trashed']) && $filters['trashed'] === 'only') {
            $query->onlyTrashed();
        }
    }
    
    // cast = type (1 = donor, 2 = campaign)
    // cast = type_id (id of donor or campaign)

    protected function type(): Attribute
    {
        return Attribute::make(
            get: fn($value) => match ($value) {
                1 => 'donor',
                2 => 'campaign',
                default => null,
            },
            set: fn($value) => match ($value) {
                'donor' => 1,
                'campaign' => 2,
                default => null,
            },
        );
    }

    protected function typeId(): Attribute
    {
        return Attribute::make(
            get: fn($value) => match ($this->type) {
                'donor' => \App\Models\Donor::find($value),
                'campaign' => \App\Models\Campaign::find($value),
                default => null,
            },
            set: fn($value) => $value,
        );
    }
}
