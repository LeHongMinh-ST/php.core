<?php
//app
const APP_PATH = 'app/';
const APP_URL = 'http://localhost/travel.booking.php';

//DB
const DB_HOSTNAME = 'localhost';
const DB_USERNAME = 'root';
const DB_PASSWORD = '';
const DB_DATABASE = 'travel.booking.php';

//Auth
const AUTH_DB = [
    'users' => [
        'model' => \App\Models\User::class
    ],
    'admins' => [
        'model' => \App\Models\Admin::class
    ]
];