<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\CompanyContact;
use App\Models\Company;
use App\Models\User;
use UserSeeder;
use CompanyTypeSeeder;

class CompanyContactTest extends TestCase
{
    use RefreshDatabase;
    protected $headers;
    protected $company;

    public function setUp():void
    {
        parent::setUp();
        $this->seed(UserSeeder::class);
        $this->seed(CompanyTypeSeeder::class);
        $this->company=factory(Company::class)->create();
        factory(User::class)->create([
            'email'    => 'test@email.com',
            'password' => bcrypt('123456'),
            'company_id'=>$this->company->id
        ]);
        $token = auth()->guard('api')
            ->login(User::first());
        $this->headers['Authorization'] = 'Bearer ' . $token;
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testCompanyContactsIndex()
    {
        factory(CompanyContact::class, 10)->create([
            'company_id'=>$this->company->id
        ]);
        $response = $this->get('api/company/'.$this->company->id.'/contacts', $this->headers);
        $response->assertStatus(200);
        $response->assertJsonStructure(['contacts']);
    }

    /** @test */
    public function testCompanyContactStore()
    {
        $this->withoutExceptionHandling([]);

        $response = $this->post('api/company/contact', $this->companyData(), $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['contact']);
    }

    public function testCompanyContactUpdate()
    {
        $this->withoutExceptionHandling([]);
        $contact = factory(CompanyContact::class)->create(['company_id'=>$this->company->id]);
        $response = $this->put('api/company/contact/'.$contact->id, $this->companyData(), $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['contact']);
    }

    /** @test */
    public function testCompanyContactDelete()
    {
        $this->withoutExceptionHandling([]);

        $contact = factory(CompanyContact::class)->create(['company_id'=>$this->company->id]);
        $response = $this->delete('api/company/contact/'.$contact->id, $this->headers);
        $response->assertOk();
        $response->assertJsonStructure(['deleted']);
    }
    

    private function companyData()
    {
        return [
            'first_name'=>'Juan',
            'last_name'=>'Moscoso',
            'company_id'=>$this->company->id
        ];
    }
}
