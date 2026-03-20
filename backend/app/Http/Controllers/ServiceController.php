<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        return response()->json(
            Service::where('is_active', true)->orderBy('sort_order')->get()
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'slug'        => 'required|string|unique:services',
            'name'        => 'required|string',
            'icon'        => 'required|string',
            'short_desc'  => 'required|string',
            'features'    => 'required|array',
            'sort_order'  => 'nullable|integer',
        ]);
        $data['features'] = json_encode($data['features']);
        return response()->json(Service::create($data), 201);
    }

    public function update(Request $request, $id)
    {
        $svc = Service::findOrFail($id);
        $data = $request->validate([
            'name'       => 'sometimes|string',
            'icon'       => 'sometimes|string',
            'short_desc' => 'sometimes|string',
            'features'   => 'sometimes|array',
            'is_active'  => 'sometimes|boolean',
        ]);
        if (isset($data['features'])) $data['features'] = json_encode($data['features']);
        $svc->update($data);
        return response()->json($svc);
    }

    public function destroy($id)
    {
        Service::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
