<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>VBay</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="loader.css">
 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    
    
<script type="text/javascript">





var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/games/",
  "method": "GET",
  "headers": {
  
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
  for(var i = 0; i <response.length ; i++){
	  if(response[i].name !=null){
	  console.log(response[i].name);
	    var ap = document.getElementById("games"+i);
        var gameNum = document.getElementById("imgSrc"+i);
		var att = document.createAttribute("game-type"); 
		att.value = response[i].gameid;
		console.log(att);
        gameNum.setAttributeNode(att);
		ap.append(response[i].name);
		gameNum.addEventListener("click", function() {
		console.log(this.getAttribute("game-type"));
		var leave = this.getAttribute("game-type");
		  localStorage.setItem("id",leave);
		   window.location.href = "https://people.rit.edu/gpg9583/vbay/auction.php";
		
});
		
	  }
  }
});



 var settings2 = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/auctions",
  "method": "GET",
  "headers": {
    
  }
}


$.ajax(settings2).done(function (response) {
	
		console.log(response[0].bids[0].price);
	    var spot = ((response[0].bids).length) -1;
		console.log(spot);
		var ap = document.getElementById("price"+0);
		ap.append(response[0].bids[spot].price);

		
});
    </script>
</head>

<body>


<a href="index.php"><img src="VBay logo.PNG" alt="logo" height = "50px"></a>

<?php include('nav.php'); ?>
    
    
  
<div class="grid-container">
  

<div id = <class="grid-item">
<h2> Item Name:<p id="games0"></p></h2> 
<img src = "https://images.igdb.com/igdb/image/upload/t_thumb/kqlntgss9yb5invq8nxi.jpg" height = "200px" width = "175px" id ='imgSrc0'></img>
<h3> Item Price<p id="price0"></p> </h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games1"></p></h2>
<a href="auction.phpl"><img src = "https://images.igdb.com/igdb/image/upload/t_thumb/izjyh7la8knxfxfvwkos.jpg" height = "200px" width = "175px" id ='imgSrc1'></img></a>

<h3> Item Price 20.00</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games2"></p></h2>
<img src = "https://images.igdb.com/igdb/image/upload/t_thumb/ahkeoao7n9ypscyfpelq.jpg" height = "200px" width = "175px" id ='imgSrc2'></img>

<h3> Item Price 15.00</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games3"></p></h2>
<img src = "https://images.igdb.com/igdb/image/upload/t_thumb/obimr8uf45m5cdjltket.jpg" height = "200px" width = "175px"id ='imgSrc3'></img>

<h3> Item Price</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games4"></p></h2>
<img src = "https://images.igdb.com/igdb/image/upload/t_thumb/lilz0thlfxutzvsbttf6.jpg" height = "200px" width = "175px"id ='imgSrc4'></img>

<h3> Item Price 20.00</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name <p id="games5"></p></h2>
<img src = "https://images.igdb.com/igdb/image/upload/t_thumb/ittzyszzkfreqqyp4e0l.jpg" height = "200px" width = "175px"id ='imgSrc5'></img>

<h3> Item Price 23.00</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name: <p id="games6"></p></h2>
<img src = "https://images.igdb.com/igdb/image/upload/t_thumb/nddlcagqy6cuqwm1rrdj.jpg" height = "200px" width = "175px"id ='imgSrc6'></img>

<h3> Item Price35.00</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name: <p id="games7"></p></h2>
<img src = "https://images.igdb.com/igdb/image/upload/t_thumb/oscbf1gxw6oqrevjzs0y.jpg" height = "200px" width = "175px"id ='imgSrc7'></img>

<h3> Item Price 30.00</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name: <p id="games8"></p></h2>
<img src = "https://images.igdb.com/igdb/image/upload/t_thumb/l0u3uqmnnj8ws9ysm67k.jpg" height = "200px" width = "175px"id ='imgSrc8'></img>

<h3> Item Price 45.00</h3>
</div>


</div>

<?php include('foot.php'); ?>

</body>
</html>