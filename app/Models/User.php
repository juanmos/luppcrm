<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\CanResetPassword;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Notifications\ResetPasswordNotification;
use App\Models\Company;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SoftDeletes;
    use HasRoles;
    
    
    protected $fillable = [
        'first_name','last_name', 'email', 'password','phone','mobile','token_and',
        'token_ios','company_id','photo','active','first_login','latitude','longitude','identification',
        'birthday'
    ];

    protected $hidden = [
        'password', 'remember_token','token_and','token_ios','email_verified_at','created_at','updated_at','deleted_at'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $with =['company'];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function getTelefonosAttribute()
    {
        return "Cel: {$this->mobile} Telf: {$this->phone}";
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    public function routeNotificationForFcm()
    {
        return $this->token_and;
    }

    public function routeNotificationForApn()
    {
        return $this->token_ios;
    }
}
