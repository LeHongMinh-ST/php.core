<?php
use App\Core\App;

require_once 'vendor/autoload.php';
require_once 'app/config/config.php';
require_once 'app/Helpers/helpers.php';
require_once 'app/Helpers/template.php';
session_start();

new App();