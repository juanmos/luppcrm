<?php

namespace App\Http\Controllers;

use \Spatie\Permission\Models\Role;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use App\Models\User;
use Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray())) {
            return response()->json([ 'error'=> 403, 'message'=> 'Forbidden' ], 403);
        }
        $users = User::paginate('50');
        $roles = Role::all()->pluck('name');
        return response()->json(compact('users', 'roles'));
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
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray())) {
            return response()->json([ 'error'=> 403, 'message'=> 'Forbidden' ], 403);
        }

        $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255','unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
        $data=$request->all();
        $data['password']=Hash::make($data['password']);
        $user= User::create(
            $data
        );
        
        $user->assignRole(($request->has('role'))?$request->get('role'):'Empresa');
        $user=User::find($user->id);
        return response()->json(compact('user'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray())) {
            return response()->json([ 'error'=> 403, 'message'=> 'Forbidden' ], 403);
        }
        $user->role=$user->getRoleNames()->implode('');

        return response()->json(compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray()) && auth('api')->user()->company_id!=$company->id) {
            return response()->json([ 'error'=> 403, 'message'=> 'Forbidden' ], 403);
        }
        $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => [
                'required','string', 'email', 'max:255',
                Rule::unique('users')->ignore($user->id)
            ],
            // 'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
        $data=$request->except(['password']);
        if ($request->has('password')) {
            $data['password']=Hash::make($request->get('password'));
        }
        
        $user->update(
            $data
        );
        if ($request->has('role')) {
            $user->syncRoles([$request->get('role')]);
        }
        
        return response()->json(compact('user'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if (in_array('Empresa', auth('api')->user()->getRoleNames()->toArray()) && auth('api')->user()->company_id!=$company->id) {
            return response()->json([ 'error'=> 403, 'message'=> 'Forbidden' ], 403);
        }
        $user->delete();
        return response()->json(['deleted'=>true]);
    }

    public function roles()
    {
        $roles = Role::all()->pluck('name');
        return response()->json(compact('roles'));
    }
}
