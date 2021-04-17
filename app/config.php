<?php
//app
define('APP_PATH','app/');
define('APP_URL','http://localhost/core.php');

//DB
define('DB_HOSTNAME', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'php27.zent');

//Auth
define('AUTH_DB', [
    'users' => [
        'model' => \App\Models\User::class
    ]
]);