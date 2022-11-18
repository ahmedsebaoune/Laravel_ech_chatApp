<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Message;
use App\Models\User;


class MessageFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var  string
    */
    protected $model = Message::class;

    /**
    * Define the model's default state.
    *
    * @return  array
    */
    public function definition(): array
    {
        return [
            'sender_id' => $this->faker->numberBetween(1,User::count()),
            'receiver_id' => $this->faker->numberBetween(1,User::count()),
            'content' => $this->faker->text,
        ];
    }
}
