<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'program_id',
        'name',
        'father_name',
        'address',
        'description',
        'date',
        'is_active',
        'is_approved',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_approved' => 'boolean',
    ];

    public function program()
    {
        return $this->belongsTo(Program::class);
    }
}
