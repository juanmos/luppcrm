<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
    public function update(Request $request)
    {
        $user=auth('api')->user();
        $user->update($request->all());
        return response()->json(['updated'=>true]);
    }
}
