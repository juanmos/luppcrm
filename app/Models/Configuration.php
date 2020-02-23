<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Company;

class Configuration extends Model
{
    protected $fillable=['company_id','configurations'];
    protected $casts = [
        'configurations'=>'array'
    ];
    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
