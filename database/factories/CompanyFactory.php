<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Company;
use Faker\Generator as Faker;

$factory->define(Company::class, function (Faker $faker) {
    return [
        'company_name'=>$faker->company,
        'company_alias'=>$faker->company,
        'ruc'=>$faker->shuffle('1234567890'),
        'address'=>$faker->address,
        'phone'=>$faker->phoneNumber,
        'company_type_id'=>1
    ];
});
