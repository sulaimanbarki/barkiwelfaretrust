<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('type', 'like', '%' . $search . '%')
                ->orWhere('type_id', 'like', '%' . $search . '%')
                ->orWhere('amount', 'like', '%' . $search . '%')
                ->orWhere('transaction_date', 'like', '%' . $search . '%')
                ->orWhere('payment_method', 'like', '%' . $search . '%')
                ->orWhere('reference_no', 'like', '%' . $search . '%')
                ->orWhere('description', 'like', '%' . $search . '%');
        });

        if (isset($filters['trashed']) && $filters['trashed'] === 'with') {
            $query->withTrashed();
        } elseif (isset($filters['trashed']) && $filters['trashed'] === 'only') {
            $query->onlyTrashed();
        }
    }
    
    protected $fillable = [
        'transaction_type',
        'type',
        'type_id',
        'type_type_id',
        'amount',
        'transaction_date',
        'payment_method',
        'reference_no',
        'description',
    ];

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method', 'id');
    }

    public function campaign()
    {
        return $this->belongsTo(Campaign::class, 'type_id', 'id');
    }
    
    public function program()
    {
        return $this->belongsTo(Program::class, 'type_id', 'id');
    }

    public function beneficiary()
    {
        return $this->belongsTo(Beneficiary::class, 'type_type_id', 'id');
    }

    public function donor()
    {
        return $this->belongsTo(Donor::class, 'type_id', 'id');
    }

    public function generalExpense()
    {
        return $this->belongsTo(ExpenseHead::class, 'type_id', 'id');
    }
}
