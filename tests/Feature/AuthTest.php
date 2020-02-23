<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use UserSeeder;

class AuthTest extends TestCase
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
    public function testLoginUser()
    {
        $response = $this->post('api/auth/login', [
            'email'    => 'test@email.com',
            'password' => '123456'
        ]);

        $response->assertJsonStructure([
            'token',
            'token_type',
            'expires_in'
        ]);
        $this->assertAuthenticated('api');
    }

    /** @test */
    public function testUserNotFound()
    {
        $response = $this->post('api/auth/login', [
            'email'    => 'tet@email.com',
            'password' => '123456'
        ]);
        $response->assertJsonStructure([
            'error'
        ]);
        
        $response->assertJsonFragment(['error'=>'Unauthorized']);
    }

    /** @test */
    public function testRegisterNewUser()
    {
        $response = $this->post('/api/auth/signup', [
            
            'last_name'  =>  'Moscoso',
            'email'     =>  'test31@email.com',
            'password'  =>  '123456',
            'password_confirmation' => '123456',
            'first_name'    =>  "Juan"
        ]);
        $response->assertJsonStructure([
            'token',
            'token_type',
            'expires_in'
        ]);
        $this->assertAuthenticated('api');
    }

    /** @test */
    public function testGetLogginUserData()
    {
        $this->actingAs(User::first(), 'api');
        $response = $this->get('/api/auth/me', $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['user']);
    }
}
