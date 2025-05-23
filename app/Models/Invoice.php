<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'invoice_number',
        'type',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected static function booted()
    {
        static::created(function ($invoice) {
            $invoice->invoice_number = 'BWS#' . str_pad($invoice->id, 6, '0', STR_PAD_LEFT);
            $invoice->save();
        });
    }
}
