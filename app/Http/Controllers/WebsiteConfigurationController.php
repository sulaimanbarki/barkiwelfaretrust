<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WebsiteConfiguration;
use Inertia\Inertia;


class WebsiteConfigurationController extends Controller
{
    public function edit()
    {
        $config = WebsiteConfiguration::first() ?? new WebsiteConfiguration();

        return Inertia::render('Settings/WebsiteConfiguration', [
            'config' => $config,
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'site_name' => 'nullable|string|max:255',
            'contact_email' => 'nullable|email|max:255',
            'contact_number' => 'nullable|string|max:50',
            'logo' => 'nullable|image|max:2048',
            'favicon' => 'nullable|image|max:1024',
        ]);

        $config = WebsiteConfiguration::firstOrNew();

        if ($request->hasFile('logo')) {
            $config->logo = $request->file('logo')->store('logos', 'public');
        }

        if ($request->hasFile('favicon')) {
            $config->favicon = $request->file('favicon')->store('favicons', 'public');
        }

        $config->fill($request->only(['site_name', 'contact_email', 'contact_number']));
        $config->save();

        return redirect()->back()->with('success', 'Website configuration updated.');
    }
}
