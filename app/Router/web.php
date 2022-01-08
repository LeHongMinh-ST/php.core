<?php

use App\Core\Route;

Route::get('/',function (){
    echo "Xin chào Lê Hồng Minh about";
});
Route::middleware('auth',function () {
    Route::prefix('admin', function () {
        Route::prefix('test', function () {
            Route::get('/test',function (){
                echo "Xin chào Lê Hồng Minh about admin";
            });
        });
    });
});

Route::get('/home/test', 'UserController@index', 'home');
Route::get('/create/{id}', 'UserController@create', 'create');
Route::get('/about', function () {
    echo "Xin chào Lê Hồng Minh about";
},'about');