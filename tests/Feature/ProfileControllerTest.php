<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use UserSeeder;

class ProfileControllerTest extends TestCase
{
    use RefreshDatabase;
    protected $headers;

    public function setUp():void
    {
        parent::setUp();
        factory(User::class)->create([
            'email'    => 'test@email.com',
            'password' => bcrypt('123456')
        ]);
        $token = auth()->guard('api')
            ->login(User::first());
        $this->headers['Authorization'] = 'Bearer ' . $token;
        $this->seed(UserSeeder::class);
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testUpdateProfile()
    {
        $this->withoutExceptionHandling();

        $user = User::first();
        $this->actingAs($user, 'api');
        $response = $this->put('/api/profile/user', [
            'first_name'=>'Juanes',
            'last_name'=>'Perez'
        ], $this->headers);
        $response->assertOk();
        $response->assertJson(['updated'=>true]);
        $this->assertEquals('Juanes', $user->fresh()->first_name);
    }
}
