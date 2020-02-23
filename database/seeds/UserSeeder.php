<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name'=>'SuperAdministrador',
            'guard_name'=>'web'
        ]);
        DB::table('roles')->insert([
            'name'=>'Empresa',
            'guard_name'=>'web'
        ]);
        DB::table('users')->insert([
            'first_name' => 'Juan Sebastian',
            'last_name' => 'Moscoso',
            'email' => 'juanmos@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '0991704980',
            'identification' => '0103086773'
        ]);
        DB::table('users')->insert([
            'first_name' => 'Juan',
            'last_name' => 'Moscoso',
            'email' => 'juan.moscoso@primme.tech',
            'password' => bcrypt('123456'),
            'phone' => '0991704980',
            'identification' => '0103086773',
            'company_id'=>0
        ]);
        DB::table('model_has_roles')->insert([
            'role_id' => '1',
            'model_type' => 'App\Models\User',
            'model_id' => '1'
        ]);
        DB::table('model_has_roles')->insert([
            'role_id' => '2',
            'model_type' => 'App\Models\User',
            'model_id' => '2'
        ]);
    }
}
