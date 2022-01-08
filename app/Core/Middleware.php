<?php


namespace App\Core;


use App\Core\Middlewares\AuthMiddleware;

class Middleware
{
    protected static $routeMiddleware = [
        'auth' => AuthMiddleware::class
    ];

    public static function check($middleware)
    {
        $middlewares = explode('|', $middleware);
        foreach ($middlewares as $mid) {
            if (array_key_exists($mid,static::$routeMiddleware)){
                $mid = new static::$routeMiddleware[$mid];
                $mid->handle();
            }
        }
    }
}