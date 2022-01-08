<?php

namespace App\Validator\Auth;

use App\Core\Validator;

class AuthValidator extends Validator
{
    public function __construct()
    {
        $arguments = func_get_args();
        $numberOfArguments = func_num_args();

        if (method_exists($this, $function = '__construct' . $numberOfArguments)) {
            call_user_func_array(array($this, $function), $arguments);
        }
    }

    public function __construct1($data)
    {
        $this->make($data);
    }
    public function __construct2()
    {

    }

    protected $rules = [
        'email' => ['required','email'],
        'password' => ['required'],
    ];

    protected $attributes = [
        'email' => 'Email',
        'password' => 'Mật khẩu'
    ];

    protected $messages = [

    ];



}