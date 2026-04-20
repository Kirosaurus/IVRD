<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'home')->name('home');
Route::inertia('/payware', 'payware')->name('payware'); 
Route::inertia('/freeware', 'freeware')->name('freeware'); 
Route::inertia('/terms&condition', 'tnc')->name('terms&condition'); 
Route::inertia('/contact', 'contact')->name('contact'); 
Route::inertia('/how2order', 'h2o')->name('how2order'); 
Route::inertia('/FAQ', 'faq')->name('FAQ'); 

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
