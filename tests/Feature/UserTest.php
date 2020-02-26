<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Company;
use App\Models\User;
use UserSeeder;
use CompanyTypeSeeder;

class UserTest extends TestCase
{
    use RefreshDatabase;
    protected $headers;

    public function setUp():void
    {
        parent::setUp();
        $this->seed(UserSeeder::class);
        $this->seed(CompanyTypeSeeder::class);
        $token = auth()->guard('api')
            ->login(User::first());
        $this->headers['Authorization'] = 'Bearer ' . $token;
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testUsersListAdmin()
    {
        $response=$this->get('/api/users', $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['users','roles']);
    }

    /** @test */
    public function testUserListEmpresa()
    {
        $token = auth()->guard('api')
            ->login(User::find(2));
        $this->headers['Authorization'] = 'Bearer ' . $token;

        $response=$this->get('/api/companies', $this->headers);
        $response->assertNotFound();
    }

    public function testCreateUser()
    {
        $this->withoutExceptionHandling();
        $response = $this->post('api/users', $this->userData(), $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['user']);
    }

    public function testUpdateUserAdmin()
    {
        $user = factory(User::class)->create();
        $response = $this->put('api/users/'.$user->id, $this->userData(), $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['user']);
        $this->assertEquals('Moscoso', $user->fresh()->last_name);
    }

    /** @test */
    public function testShowUser()
    {
        $user = factory(User::class)->create();
        $response = $this->get('api/users/'.$user->id, $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['user']);
    }
    

    /** @test */
    public function testDeleteUser()
    {
        $user = factory(User::class)->create();
        $response = $this->delete('api/users/'.$user->id, $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['deleted']);
    }

    /** @test */
    public function testRolesUser()
    {
        $response = $this->get('api/roles/', $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['roles']);
    }
    
    

    private function userData()
    {
        return [
            'last_name'  =>  'Moscoso',
            'email'     =>  'test31@email.com',
            'password'  =>  '123456',
            'password_confirmation' => '123456',
            'first_name'    =>  "Juan"
        ];
    }
}
