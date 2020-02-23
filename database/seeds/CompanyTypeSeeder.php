<?php

use Illuminate\Database\Seeder;

class CompanyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('company_types')->insert([
            'type'=>'Persona natural'
        ]);

        DB::table('company_types')->insert([
            'type'=>'Unidad Educativa'
        ]);

        DB::table('company_types')->insert([
            'type'=>'Restaurant'
        ]);
    }
}
