<?php
require "vendor/autoload.php";
require_once "config.php";
use GuzzleHttp\Client;


$donate = $_GET['donate']*100;
$GetTokenParams = [
  "checkout" => [
    "transaction_type" => "payment",
    "version" => 2.1,
    "attempts" => 3,
    "settings" => [
      "success_url" => "https://donate2.falanster.by/mpa/frame.html?message=1",
      "decline_url" => "https://donate2.falanster.by/mpa/frame.html?message=2",
      "fail_url" => "https://donate2.falanster.by/mpa/frame.html?message=3",
      "language"=> "ru"
    ],
    "order" =>[
      "currency"=> "BYN",
      "amount"=> $donate,
      "description"=> "Order description"
    ],
    "customer"=> [
      "address"=> "Baker street 221b",
      "country"=> "GB",
      "city"=> "London",
      "email"=> "jake@example.com"
    ],
  ]
];

$client = new Client([
  'base_uri' => "https://checkout.bepaid.by"
]);

$response = $client->request('POST', '/ctp/api/checkouts', [
  'auth'    => [$configConfidence['idMarket'], $configConfidence['keyMarket']],
  'headers' => ['Accept' => 'application/json'],
  'json'    => $GetTokenParams,
  'verify' => false
]); 
echo $response->getBody();