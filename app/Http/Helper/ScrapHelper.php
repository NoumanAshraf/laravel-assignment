<?php


namespace App\Http\Helper;


use GuzzleHttp\Client;

class ScrapHelper
{
    private $key;
    private $client;

    public function __construct()
    {
        $this->client = new Client([
            'headers' => [
                'Content-Type' => 'application/json'
            ]
        ]);


    }
    public function getAllData()
    {
        $url = "https://news.ycombinator.com/";
        //return json_decode($this->client->get($url)->getBody());
        $response = $this->client->request('GET', 'https://news.ycombinator.com/');
        echo ($response->getBody());
    }


}
