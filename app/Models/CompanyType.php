<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Company;

class CompanyType extends Model
{
    protected $fillable=['type'];
    protected $timestamps =false;
    
    public function companies()
    {
        return $this->hasMany(Company::class, 'company_id');
    }
}
