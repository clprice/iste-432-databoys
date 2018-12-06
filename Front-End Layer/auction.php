<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>VBay</title>


  <link rel="stylesheet" href="style.css">

</head>


<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://afternoon-beyond-89008.herokuapp.com/vbay-api/bids',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
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
		 $x == $jsonData['price'];
		echo $x;
        
   
}
?>
<body>

<a href="index.html"><img src="VBay logo.PNG" alt="logo" height = "50px"></a>

    <nav class="main-menu">
        <ul id="page-header">
            <li><a href="index.html">Home</a></li>
            <li><a href="auction.html">Auction</a></li>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="login.php">Login</a></li>

        </ul>   
    </nav>

    <h1>Auctions</h1>
    <div class="container">
        <div class="auction">
            <h2>Item Name:</h2>
            <img src="image1.jpg" height="200px" width="175px">
            <h2>Seller:</h2>
        </div>
            <br/> <br/>
        <div class="dosier">
            Description: <p id ="desc"></p>
            <br>
            Price: <p id ="price"><?php  ?></p>
            <br>
            Condition: <p id ="condition"></p>
            <br>
        </div>
	
            <br/> <br/>
            <form action="#">
                Bid Amount:
                <input type="number" value="0" min="0" max="800">
                <input type="submit">
            </form>
    </div>
    <div class="footer">
        <p>&copy The Data Boys</p>
    </div>
</body>
</html>
