<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray())) {
            abort(404);
        }
        $companies = Company::orderBy('company_name')->paginate('50');
        return response()->json(compact('companies'));
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
            'company_name'=>'required',
            'company_alias'=>'required',
            'ruc'=>'required|digits_between:10,13',
        ]);
        $data = $request->all();

        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray()) && auth('api')->user()->company_id!=0) {
            return response()->json([ 'error'=> 401, 'message'=> 'Not Authorized' ], 401);
        } else {
            $company =Company::create($data);
            $company->configuration()->create();
            auth('api')->user()->update(['company_id'=>$company->id]);
            return response()->json(compact('company'));
        }

        
        $company = Company::create($data);
        $company->configuration()->create();
        return response()->json(\compact('company'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray()) && auth('api')->user()->company_id!=$company->id) {
            return response()->json([ 'error'=> 401, 'message'=> 'Not Authorized' ], 401);
        }
        $request->validate([
            'company_name'=>'required',
            'company_alias'=>'required',
            'ruc'=>'required|digits_between:10,13',
        ]);
        $data = $request->all();
        $company->update($data);
        $updated=true;
        return response()->json(compact('updated', 'company'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        //
    }

    public function users(Company $company)
    {
        $users = $company->users()->orderBy('first_name')->get();
        return response()->json(compact('users'));
    }
}
