<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone')->nullable();
            $table->string('mobile')->nullable();
            $table->string('token_and')->nullable();
            $table->string('token_ios')->nullable();
            $table->integer('company_id')->default(0);
            $table->string('phonte')->nullable();
            $table->boolean('active')->default(1);
            $table->boolean('first_login')->default(0);
            $table->decimal('latitude', 16, 10)->default(0);
            $table->decimal('longitude', 16, 10)->default(0);
            $table->string('identification', 50)->nullable();
            $table->date('birthday')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
