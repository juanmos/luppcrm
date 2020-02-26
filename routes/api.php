<?php


Route::group(['prefix' => 'auth','middleware'=>'api', 'namespace'=>'Auth'], function () {
    Route::post('login', ['as'=>'login','uses'=>'LoginController@login']);
    Route::post('signup', ['as'=>'signup','uses'=>'LoginController@create']);
    Route::get('me', ['as'=>'me','uses'=>'LoginController@me']);
});

Route::group(['prefix' => 'profile','middleware'=>'api'], function () {
    Route::put('/user', 'ProfileController@update')->name('profile.update');
});


Route::group(['middleware' => 'api'], function () {
    //COMPANIES
    Route::get('/companies', 'CompanyController@index')->name('company.index');
    Route::post('/company', 'CompanyController@store')->name('company.store');
    Route::put('/company/{company}', 'CompanyController@update')->name('company.update');

    //USERS
    Route::get('/users', 'UserController@index')->name('user.index');
    Route::get('/users/{user}', 'UserController@show')->name('user.show');
    Route::get('/roles', 'UserController@roles')->name('user.show');
    Route::post('/users', 'UserController@store')->name('user.store');
    Route::put('/users/{user}', 'UserController@update')->name('user.update');
    Route::delete('/users/{user}', 'UserController@destroy')->name('user.destroy');
});
