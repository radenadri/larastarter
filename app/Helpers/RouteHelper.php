<?php

namespace App\Helpers;

class RouteHelper
{
    public static function getDashboardPrefix(): string
    {
        return config('app.dashboard_prefix_version') . '/' . config('app.dashboard_prefix');
    }
}
