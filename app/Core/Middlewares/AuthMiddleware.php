<?php


namespace App\Core\Middlewares;


use App\Core\Auth\Auth;

class AuthMiddleware
{
    public function handle(){
        if (!Auth::guard()->check()){
            die('403');
        }
    }
}