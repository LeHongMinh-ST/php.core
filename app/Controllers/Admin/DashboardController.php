<?php

namespace App\Controllers\Admin;

use App\Core\Controller;

class DashboardController extends Controller
{
    public function index() {
        $this->views('admin/dashboard');
    }
}