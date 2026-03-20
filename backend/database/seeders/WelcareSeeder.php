<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WelcareSeeder extends Seeder
{
    public function run(): void
    {
        // ── Services
        $services = [
            ['slug' => 'housekeeping', 'name' => 'Housekeeping Services', 'icon' => '🧹', 'sort_order' => 1,
             'short_desc' => 'Trusted housekeeping solutions for hotels, homes, offices and commercial complexes by experienced, vetted staff.',
             'features' => json_encode(['Dusting of windowsills & ledges', 'Window glass cleaning', 'Cobweb removal & garbage clearing', 'Personalized, flexible approach', 'Cost-effective packages'])],
            ['slug' => 'landscape', 'name' => 'Landscape Services', 'icon' => '🌿', 'sort_order' => 2,
             'short_desc' => 'Expert landscaping for lawns, parks, private and public spaces with adroit gardeners.',
             'features' => json_encode(['Lawn & park maintenance', 'Urban landscape planning', 'Ecological & scenic design', 'Coastal & rural land use', 'Pocket-friendly pricing'])],
            ['slug' => 'security', 'name' => 'Security Services', 'icon' => '🛡️', 'sort_order' => 3,
             'short_desc' => 'Reliable security consultancy with flawless training programs and high-grade placements.',
             'features' => json_encode(['Best-in-industry training', 'High-knowledge guard staff', 'Superb reliability', 'High-grade job placements', 'Industrial norms compliance'])],
            ['slug' => 'outsourcing', 'name' => 'Outsourcing Services', 'icon' => '🔄', 'sort_order' => 4,
             'short_desc' => 'Deft professionals with in-depth domain knowledge delivering outsourcing in a well-organised, prompt manner.',
             'features' => json_encode(['Technical facility support', 'Staffing & manpower supply', 'Contract management', 'Supplier coordination', 'Third-party solutions'])],
            ['slug' => 'gardening', 'name' => 'Gardening Services', 'icon' => '🌱', 'sort_order' => 5,
             'short_desc' => 'Skilled gardening professionals providing a wide range of services tailored to your needs.',
             'features' => json_encode(['Planting & fertilizing', 'Weed removal', 'Farm house management', 'Garden design', 'Top-layer scraping'])],
            ['slug' => 'electrical', 'name' => 'Electrical Services', 'icon' => '⚡', 'sort_order' => 6,
             'short_desc' => 'Superior-grade electrical services using advanced technology in adherence with industry standards.',
             'features' => json_encode(['220KV sub-station maintenance', 'Earth resistance measurement', 'Engineers & supervisors supplied', 'On-time, reliable execution', 'Highly reliable'])],
            ['slug' => 'plumbing', 'name' => 'Plumbing Services', 'icon' => '🔧', 'sort_order' => 7,
             'short_desc' => 'Sanitary and industrial plumbing services covering all types of piping work and installations.',
             'features' => json_encode(['Sanitary & hydraulic piping', 'Fire hydrant piping', 'Chiller & insulated piping', 'SS, PPR, CPVC & UPVC work', 'Pneumatic piping'])],
            ['slug' => 'catering', 'name' => 'Catering Services', 'icon' => '🍽️', 'sort_order' => 8,
             'short_desc' => 'Exclusive catering arrangements for birthdays, weddings, engagements and all events.',
             'features' => json_encode(['Birthday party arrangements', 'Wedding & engagement catering', 'Variety of delectable menus', 'Experienced chefs', 'Quality-checked service'])],
        ];
        foreach ($services as $s) {
            DB::table('services')->insert(array_merge($s, ['created_at' => now(), 'updated_at' => now(), 'is_active' => 1]));
        }

        // ── Testimonials
        $testimonials = [
            ['author_name' => 'Rajesh Kumar', 'author_role' => 'Facility Manager, IT Park — Chennai', 'avatar_initial' => 'R', 'rating' => 5,
             'content' => 'Welcare FMS has been managing our corporate office housekeeping for over 3 years. Their team is punctual, professional, and the quality is consistently outstanding.'],
            ['author_name' => 'Priya Venkatesh', 'author_role' => 'Resident Welfare Association, Nungambakkam', 'avatar_initial' => 'P', 'rating' => 5,
             'content' => 'Their landscaping team transformed our residential complex beautifully. They understood our vision perfectly and delivered at very competitive prices. Highly recommended!'],
            ['author_name' => 'Suresh Annamalai', 'author_role' => 'Hotel Operations Manager, Chennai', 'avatar_initial' => 'S', 'rating' => 5,
             'content' => 'Electrical and plumbing teams are top-notch. Fast execution, highly skilled professionals, and they follow all safety norms. Our hotel maintenance has never been smoother.'],
        ];
        foreach ($testimonials as $t) {
            DB::table('testimonials')->insert(array_merge($t, ['created_at' => now(), 'updated_at' => now(), 'is_active' => 1]));
        }

        // ── Gallery
        $gallery = [
            ['title' => 'Hotel & Commercial Housekeeping', 'category' => 'housekeeping', 'is_wide' => 1, 'sort_order' => 1],
            ['title' => 'Trained Security Personnel',      'category' => 'security',      'is_wide' => 0, 'sort_order' => 2],
            ['title' => 'Security Training Program',       'category' => 'security',      'is_wide' => 0, 'sort_order' => 3],
            ['title' => 'Corporate Garden Landscaping',    'category' => 'landscape',     'is_tall' => 1, 'sort_order' => 4],
            ['title' => 'Residential Garden Maintenance',  'category' => 'landscape',     'is_wide' => 0, 'sort_order' => 5],
            ['title' => 'Industrial Electrical Services',  'category' => 'electrical',    'is_wide' => 0, 'sort_order' => 6],
            ['title' => 'Wedding & Event Catering',        'category' => 'catering',      'is_wide' => 0, 'sort_order' => 7],
            ['title' => 'Five-Star Hotel Housekeeping',    'category' => 'housekeeping',  'is_wide' => 0, 'sort_order' => 8],
        ];
        foreach ($gallery as $g) {
            DB::table('galleries')->insert(array_merge(
                array_merge(['is_wide' => 0, 'is_tall' => 0], $g),
                ['created_at' => now(), 'updated_at' => now(), 'is_active' => 1]
            ));
        }

        $this->command->info('✅ Welcare FMS seeded successfully!');
    }
}
