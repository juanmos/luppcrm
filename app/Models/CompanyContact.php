<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Company;

class CompanyContact extends Model
{
    protected $fillable=[
        'company_id',
        'first_name',
        'last_name',
        'phone',
        'extension',
        'mobile',
        'email',
        'position'

    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
