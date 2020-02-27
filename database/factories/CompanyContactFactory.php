<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\CompanyContact;
use App\Models\Company;
use Faker\Generator as Faker;

$factory->define(CompanyContact::class, function (Faker $faker) {
    return [
        'company_id'=>factory(Company::class),
        'first_name'=>$faker->firstName,
        'last_name'=>$faker->lastName,
        'phone'=>$faker->phoneNumber,
        'extension'=>'123',
        'mobile'=>$faker->phoneNumber,
        'email'=>$faker->email
    ];
});
