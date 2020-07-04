<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Customer::truncate();
        $faker = Faker::create();
        foreach (range(1,100) as $index) {
            \App\Customer::insert([
                'name' => $faker->name,
                'email' => $faker->email,
                'phone' =>$faker->phoneNumber,
                'address' =>$faker->address,
            ]);
        }
        //$customerQuantity = 1000000;
        //factory(\App\Customer::class, $customerQuantity)->create();
    }
}
