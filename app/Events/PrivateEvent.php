<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;

class PrivateEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public $receiver;
    public $message;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($receiver,$message)
    {
        $this->receiver = $receiver;
        $this->message = $message;

        //
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        $sender_id =Auth::id();
        return new PresenceChannel('conversation:'.($sender_id > $this->receiver ? ($this->receiver .'.'.$sender_id):($sender_id.'.'.$this->receiver)) );
    }
        public function broadcastWith()
    {
        return [
            'message' => $this->message,
            'sender_id' => Auth::id(),
        ];
    }
}
