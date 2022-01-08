<?php

use App\Core\Route;

Route::get('/',function (){
    echo "Xin chào Lê Hồng Minh about";
});

Route::prefix('admin', function () {
    Route::get('/login', 'Auth\AuthAdminController@sendFormLogin', 'admin.login.form');
    Route::post('/login', 'Auth\AuthAdminController@login', 'admin.login');

    Route::get('/dashboard', 'Admin\DashboardController@index', 'admin.dashboard');
});
