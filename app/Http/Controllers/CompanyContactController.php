<?php

namespace App\Http\Controllers;

use App\Models\CompanyContact;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Company $company)
    {
        $contacts = $company->contacts()->orderBy('first_name')->get();
        return response()->json(compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name'=>'required',
            'last_name'=>'required',
            'company_id'=>'required'
        ]);
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray()) && auth('api')->user()->company_id!=$request->get('company_id')) {
            return response()->json([ 'error'=> 401, 'message'=> 'Not Authorized' ], 401);
        }
        $contact =CompanyContact::create($request->all());
        return response()->json(compact('contact'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CompanyContact  $companyContact
     * @return \Illuminate\Http\Response
     */
    public function show(CompanyContact $companyContact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompanyContact  $companyContact
     * @return \Illuminate\Http\Response
     */
    public function edit(CompanyContact $companyContact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompanyContact  $companyContact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CompanyContact $contact)
    {
        $request->validate([
            'first_name'=>'required',
            'last_name'=>'required',
            'company_id'=>'required'
        ]);
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray()) && auth('api')->user()->company_id!=$request->get('company_id')) {
            return response()->json([ 'error'=> 401, 'message'=> 'Not Authorized' ], 401);
        }
        $contact->update($request->all());
        return response()->json(compact('contact'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompanyContact  $companyContact
     * @return \Illuminate\Http\Response
     */
    public function destroy(CompanyContact $contact)
    {
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray()) && auth('api')->user()->company_id!=$request->get('company_id')) {
            return response()->json([ 'error'=> 401, 'message'=> 'Not Authorized' ], 401);
        }
        $contact->delete();
        return response()->json(['deleted'=>true]);
    }
}
