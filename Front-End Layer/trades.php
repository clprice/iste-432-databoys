<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>VBay - Trades</title>
    <link rel="stylesheet" href="style.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>

<body>
<?php

$jsonData = "";

function getAllTrades() {
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/trades",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_POSTFIELDS => "",
    CURLOPT_HTTPHEADER => array(),
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    $jsonData = json_decode($response,true);
  }
  return $jsonData;
}

function getGame($gameid) {

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/games/$gameid",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_POSTFIELDS => "",
    CURLOPT_HTTPHEADER => array()
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    $jsonData = json_decode($response,true);
  }
  return $jsonData['name'];
}

function getAllCompletedTrades() {

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/completedtrades",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_POSTFIELDS => "",
    CURLOPT_HTTPHEADER => array()
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    $jsonData = json_decode($response,true);
  }

  return $jsonData;
}
?>
<a href="index.html"><img src="VBay logo.PNG" alt="logo" height = "50px"></a>
<?php include 'nav.php';?>

<h1>Trades</h1>
<div class="container">
  <?php
    foreach(getAllTrades() as $trade) {
      $flag = 0;
      foreach(getAllCompletedTrades() as $complete) {
        if($trade['tradeid'] == $complete['tradeid'])
          $flag = 1;
      }
      if($flag == 0)
        echo '<div class="trade"><a href="trade.php?tradeid='.$trade['tradeid'].'"><h3>'.getGame($trade['gameid']).'</h3></a><p>'.$trade['description'].'</p></div>';
    }
  ?>
</div>
<?php include 'foot.php';?>
</body>

</html>