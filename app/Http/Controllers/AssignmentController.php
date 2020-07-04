<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Http\Helper\ScrapHelper;
use Illuminate\Routing\Controller as BaseController;
use Yajra\DataTables\Contracts\DataTable;
use Yajra\DataTables\DataTableAbstract;
use Yajra\DataTables\DataTables;

class AssignmentController extends BaseController
{
    public function index()
    {
        return view('assignment');
    }

    public function fetchScrapData()
    {
        $customers = Customer::all();
        return DataTables::of($customers)->make();
    }

}
