<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function index()
    {
        return response()->json(
            Testimonial::where('is_active', true)->orderByDesc('created_at')->get()
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'author_name'   => 'required|string',
            'author_role'   => 'nullable|string',
            'content'       => 'required|string',
            'rating'        => 'nullable|integer|min:1|max:5',
            'avatar_initial'=> 'nullable|string',
        ]);
        return response()->json(Testimonial::create($data), 201);
    }

    public function update(Request $request, $id)
    {
        $t = Testimonial::findOrFail($id);
        $t->update($request->validate([
            'author_name'   => 'sometimes|string',
            'author_role'   => 'nullable|string',
            'content'       => 'sometimes|string',
            'rating'        => 'nullable|integer|min:1|max:5',
            'is_active'     => 'boolean',
        ]));
        return response()->json($t);
    }

    public function destroy($id)
    {
        Testimonial::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
