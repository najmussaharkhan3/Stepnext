<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User; // agar admin users same table me hain
use Illuminate\Support\Facades\Hash;

class AdminLoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // check user in DB
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // token generate (using Laravel Sanctum)
        $token = $user->createToken('token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'message' => 'Login successful'
        ]);
    }
}