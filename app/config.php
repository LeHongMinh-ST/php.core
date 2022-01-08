<?php
//app
define('APP_PATH','app/');
define('APP_URL','http://localhost/movie.php.core/');

//DB
define('DB_HOSTNAME', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'movie.php.core');

//Auth
define('AUTH_DB', [
    'users' => [
        'model' => \App\Models\User::class
    ]
]);