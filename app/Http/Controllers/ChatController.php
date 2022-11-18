<?php

namespace App\Http\Controllers;

use App\Events\PrivateEvent;
use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ChatController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Messanger', [
                'connections' => function () {
                    return (
                    Conversation::where(function ($query) {
                        $query->where('user1_id', Auth::id())
                            ->orWhere('user2_id', Auth::id());
                    })->with(['user1', 'user2','messages'])->get()
                    );
                }]
        );
    }

    public function send(Request $request)
    {

        $reciever = $request->reciever;
        $message = $request->message;
        $sender = Auth::id();
        $users = [$sender, $reciever];
        sort($users);
        $conversation = Conversation::where([
            ['user1_id', '=', $users[0]],
            ['user2_id', '=', $users[1]]
        ])->first();

        if ($conversation == null) {
            $conversation = Conversation::create(
                [
                    'user1_id' => $users[0],
                    'user2_id' => $users[1],
                ]
            );
        }

        Message::create(
            [
                'conversation_id' => $conversation->id,
                'sender_id' => $sender,
                'content' => $message,
            ]
        );

        event(new PrivateEvent($request->reciever, $request->message));
        return Redirect::route('messanger');

    }
}
