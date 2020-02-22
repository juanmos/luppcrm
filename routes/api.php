<?php


Route::group(['prefix' => 'auth','middleware'=>'api', 'namespace'=>'Auth'], function () {
    Route::post('login', ['as'=>'login','uses'=>'LoginController@login']);
    Route::post('signup', ['as'=>'signup','uses'=>'LoginController@create']);
    Route::get('me', ['as'=>'me','uses'=>'LoginController@me']);
});

Route::group(['prefix' => 'profile','middleware'=>'api'], function () {
    Route::put('/user', 'ProfileController@update')->name('profile.update');
});
