<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    use \Illuminate\Database\Eloquent\SoftDeletes;
    
    protected $fillable = [
        'actor_id',
        'actor_type',
        'subject_id',
        'subject_type',
        'activity',
        'message',
    ];

    // Optional: relation to user who did the action
    public function actor()
    {
        return $this->morphTo(null, 'actor_type', 'actor_id');
    }

    // Relation to the model that was affected
    public function subject()
    {
        return $this->morphTo(null, 'subject_type', 'subject_id');
    }
}
