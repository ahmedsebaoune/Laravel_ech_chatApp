<?php

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Redis;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('public',function(){
    return true;
});

Broadcast::channel('conversation:{id1}.{id2}',function($user,int $id1,int $id2){
    dd($id2);
        if($user->id != $id1 && $user->id != $id2) return false;
        return ['id' => $user->id, 'name' => $user->name];
});
// Broadcast::channel('user:{id}',function($user,int $group){
//     return isset($user);
// });
