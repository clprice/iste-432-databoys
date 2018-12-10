<!doctype html>
<?php
session_start();

//var ses = $_SESSION['role'];

?>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>VBay</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    


 <link rel="stylesheet" href="style.css">
<script  type="text/javascript">

//var ses = <?php json_encode($ses);?>;
//console.log(ses);
 var biddingid = localStorage.getItem("id");
 var id = localStorage.getItem("id") -1;
 console.log(id);
 var url = "https://afternoon-beyond-89008.herokuapp.com/vbay-api/auctions/";
 var realUrl  = url +id;
 console.log(realUrl);
 var settings = {
  "async": true,
  "crossDomain": true,
  "url": url,
  "method": "GET",
  "headers": {
    
  }
}


$.ajax(settings).done(function (response) {
console.log((response[id].bids).length);
var spot = (response[id].bids).length;
var it = spot -1;
var status = response[id].status;
	if(status == 'Live'){
			var aid = response[id].auctionid;
			console.log(aid);
			var status = response[id].status;
			console.log(status);
			var pr = response[id].bids[it].price;
			var x = pr.toFixed(2);
			var desc = response[id].description;
			console.log(desc);
			var cond = document.getElementById('desc');
			cond.append(desc);
			var y = document.getElementById('price');
			y.append(x);
	}
	else{
		
		alert(" This auction is actually over!");
		location.replace("https://people.rit.edu/gpg9583/vbay/index.html");
	}

	});
var settings3 = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/games/",
  "method": "GET",
  "headers": {
  
  }
}

$.ajax(settings3).done(function (response) {
  
	  console.log(response[biddingid].name);
	  var gameName = response[biddingid].name;
	  
	 
		
	  
  
});

</script>
</head>


<body>
 
<a href="index.php"><img src="VBay logo.PNG" alt="logo" height = "50px"></a>

<?php include('nav.php'); ?>

    <h1>Auctions</h1>
    <div class="container">

        <div class="auction">
            <h2 id = "gname"></h2>
            <img src="https://images.igdb.com/igdb/image/upload/t_thumb/kqlntgss9yb5invq8nxi.jpg" height="200px" width="175px">
            <h2>Seller:</h2>
        </div>
            <br/> <br/>
        <div class="dosier">
            Description: <p id ="desc"></p>
            <br>
            Price: <p id ="price"></p>
          
        </div>
	
            <br/> <br/>
            <form id="bid-form" class="form" action="" method="post">
                Bid Amount:
                <input type="number"  name = "price" value="0" min="0" max="800">
                <input type="submit">
            </form>
    </div>
    <div class="footer">
        <p>&copy The Data Boys</p>
    </div>
	<?php
	
	if (isset($_POST['submit']) && !empty($_POST['price'])){
		#insert some kind of api calls here


					$curl = curl_init();
					$x = 'https://afternoon-beyond-89008.herokuapp.com/vbay-api/bids';
					$y = $_POST['auctionId'];
					$z = "{$x}{$y}";
					$price = $_POST['price'];
					$userid = $_SESSION['role'];
	
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
					echo $jsonData['price'];
					echo $_SESSION['role'];
					curl_close($curl);

					if ($err) {
					  echo "cURL Error #:" . $err;
					} else {
					 // make sure the emails aren't the same
					
					  if($price > $jsonData['price']){
							
													
													
													$curl = curl_init();

														curl_setopt_array($curl, array(
														  CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/auctions/1/bids",
														  CURLOPT_RETURNTRANSFER => true,
														  CURLOPT_ENCODING => "",
														  CURLOPT_MAXREDIRS => 10,
														  CURLOPT_TIMEOUT => 30,
														  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
														  CURLOPT_CUSTOMREQUEST => "POST",
														  CURLOPT_POSTFIELDS => "{\"userid\": \"$userid\", \"price\": \"$price\"}",
														  CURLOPT_HTTPHEADER => array(
															"Content-Type: application/json",
															
														  ),
														));

														$response = curl_exec($curl);
														$err = curl_error($curl);

														curl_close($curl);

														if ($err) {
														  echo "cURL Error #:" . $err;
														} else {
														  echo $response;
														};
																			  
					  }//end of post
					  
					}//end of else
	}//end of if

?>
</body>
</html>
