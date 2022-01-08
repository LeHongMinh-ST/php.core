<?php


namespace App\Controllers;

use App\Core\Controller;
use App\Core\Request;
use App\Core\Validator;

class UserController extends Controller
{
    public function index()
    {
        return $this->views('index');
    }

    public function create(Request $request, $id)
    {
        $valiedate = new Validator();
        $valiedate->make(
            [
                'name'=>'ar'
            ], [
            'name' => ['required', 'integer'],
            'email' => ['required', 'email']
        ], [
            'test' => 'aa'
        ], [
            'name' => 'Tên đăng nhập'
        ]);
        dd($valiedate->getError());
        dd($request->all());
    }
}