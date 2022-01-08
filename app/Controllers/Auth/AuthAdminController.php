<?php

namespace App\Controllers\Auth;

use App\Core\Auth\Auth;
use App\Core\Controller;
use App\Core\Request;
use App\Core\Session\Session;
use App\Validator\Auth\AuthValidator;

class AuthAdminController extends Controller
{
    public function sendFormLogin()
    {
        if (Session::has('auth')) {
            $auth = Session::get('auth');
            if (isset($auth['admins'])) {
                $this->redirect(route('admin.dashboard'));
            }
        }
        $this->views('admin/auth/login');
    }

    public function login(Request $request)
    {
        $data = $request->all();
        $validate = new AuthValidator($data);
        if (!$validate->isValid()) {
            Session::push('errors', $validate->getError());
            $this->back();
        }

        $auth = new Auth('admins');

        if (!$auth->attempt(['email' => $data['email'], 'password' => md5($data['password'])])) {
            Session::push('errors', [
                'email' => 'Email hoặc mật khẩu không chính xác'
            ]);
            $this->back();
        }

        $this->redirect(route('admin.dashboard'));
    }

    public function logout() {
        Auth::logout('admin');
        $this->redirect(route('admin.dashboard'));
    }
}