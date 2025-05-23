<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;


class WebsiteConfiguration extends Model
{
    protected $fillable = [
        'site_name',
        'contact_email',
        'contact_number',
        'logo',
        'favicon',
    ];

    protected $hidden = ['created_at', 'updated_at'];

    protected $appends = ['logo_url'];

    public function getLogoUrlAttribute()
    {
        return $this->logo 
        ? asset('storage/' . ltrim($this->logo, '/')) 
        : null;
    }
}
