<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>VBay</title>
  <link rel="stylesheet" href="style.css">
   

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    
    
<script type="text/javascript">



//global vars
/*
      var games=[];
    
    
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/games/gameid",
  "method": "GET",
  "headers": {}
}

//first loop to collect url
for ( var x = 1; x<10; x++){
    var tmp = jQuery.extend(true, {}, settings);
    tmp.url += x.toString();
  
  
//ajax to collect everything    
$.ajax(tmp).always(function (response) {
    
    if(response.name != null){
    //get the nme of the games
    var y = response.name;
    //get the name of the games for looping with doc id
    var name = '#games' + i;
    //store in a global array
    games.push(y);
    //cehck
   // console.log(games);
    //does nothing
   // $(name).html(y);
    }
    //loop every element in array
      for(var i=1; i<10;i++){
          //find the element of the id of games plus spot in array
             var ap = document.getElementById("games"+i);
          //check again
           console.log(games);
        //make sure nothing is null
        if(games[i] != null){
            //set the game to a
            var a = games[i];
            //get the conent of the element so no duplicates
            var b = ap.textContent;
            //unused x
            var z;
            //make sure the one were putting in isn't the same as the one thats in there
            if(a != b){
            //put it in
        ap.append(games[i]);
            }
            else{
                //make sure the next one is different so its not added in
                b = a;
            }
        }
        }//end of i for loop
		
});
}//end of for urls 
   
  
  */
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/games/",
  "method": "GET",
  "headers": {
    
  }
}

$.ajax(settings).done(function (response) {
  console.log(response[0].name);
  for(int i = 0; i < 10; i++;){
	  
	  var get = document.getElementById("games"+i);
	  get.append(response[i].name);
	  
  }
});  
    </script>
</head>

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
    
    
    
<div class="grid-container">
    
 
<div id = <class="grid-item">
<h2> Item Name:<p id="games1"></p></h2> 
<img src = "image1.jpg" height = "200px" width = "175px"></img>
<h3> Item Price</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games2"></p></h2>
<img src = "image2.png" height = "200px" width = "175px"></img>

<h3> Item Price</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games3"></p></h2>
<img src = "image3.jpg" height = "200px" width = "175px"></img>

<h3> Item Price</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games4"></p></h2>
<img src = "image1.jpg" height = "200px" width = "175px"></img>

<h3> Item Price</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games5"></p></h2>
<img src = "image1.jpg" height = "200px" width = "175px"></img>

<h3> Item Price</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name <p id="games6"></p></h2>
<img src = "image1.jpg" height = "200px" width = "175px"></img>

<h3> Item Price</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games7"></p></h2>
<img src = "image1.jpg" height = "200px" width = "175px"></img>

<h3> Item Price</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games8"></p></h2>
<img src = "image1.jpg" height = "200px" width = "175px"></img>

<h3> Item Price</h3>
</div>
<div id = <class="grid-item">
<h2> Item Name:<p id="games9"></p></h2>
<img src = "image1.jpg" height = "200px" width = "175px"></img>

<h3> Item Price</h3>
</div>


</div>

<div class="footer">
  <p>&copy The Data Boys</p>
</div>
</body>
</html>