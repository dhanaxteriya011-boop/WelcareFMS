<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Gallery;

class GalleryController extends Controller
{
    public function index()
    {
        return response()->json(
            Gallery::where('is_active', true)->orderBy('sort_order')->get()
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'      => 'required|string',
            'category'   => 'required|string',
            'image_url'  => 'nullable|url',
            'is_wide'    => 'boolean',
            'is_tall'    => 'boolean',
            'sort_order' => 'nullable|integer',
        ]);
        return response()->json(Gallery::create($data), 201);
    }

    public function update(Request $request, $id)
    {
        $item = Gallery::findOrFail($id);
        $item->update($request->validate([
            'title'     => 'sometimes|string',
            'category'  => 'sometimes|string',
            'image_url' => 'nullable|url',
            'is_wide'   => 'boolean',
            'is_tall'   => 'boolean',
            'is_active' => 'boolean',
        ]));
        return response()->json($item);
    }

    public function destroy($id)
    {
        Gallery::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
