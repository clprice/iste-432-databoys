<?php

$curl = curl_init();
$x = 'https://afternoon-beyond-89008.herokuapp.com/vbay-api/users/';
$y = 'dragon23';
$z = "{$x}{$y}";

curl_setopt_array($curl, array(
  CURLOPT_URL => $z,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => "",
  CURLOPT_HTTPHEADER => array(
    
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);
$jsonData = json_decode($response,true);
curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
 
  echo $jsonData["password"];
}
?>