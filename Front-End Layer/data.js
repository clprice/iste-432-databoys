
//bids post
var bidsPost = {
  "async": true,
  "crossDomain": true,
  "url": "  https://afternoon-beyond-89008.herokuapp.com/vbay-api/auctions/:auctionid/bids",
  "method": "POST",
  "headers": {},
  "data": "{\"userid\": \"String\", \"price\": \"Double\"}"
}

$.ajax(bidsPost).done(function (response) {
 // console.log(response);
});





//bids get
var bidsGet = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/bids",
  "method": "GET",
  "headers": {}
}

$.ajax(bidsGet).done(function (response) {
  console.log(response);
});


//game double get
var gamePrice = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/games",
  "method": "GET",
  "headers": {}
}

$.ajax(gamePrice).done(function (response) {
  console.log(response);
});
//auction get
var auctionGet = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/auctions",
  "method": "GET",
  "headers": {}
}

$.ajax(auctionGet).done(function (response) {
  console.log(response);
});
//login
var login = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/users",
  "method": "POST",
  "headers": {},
  "data": "{\"email\": \"String\", \"password\": \"String\", \"fname\": \"String\", \"lname\": \"String\"}"
}

$.ajax(login).done(function (response) {
  console.log(response);
});

//add games
var gamesPost = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/games",
  "method": "POST",
  "headers": {},
  "data": "{\"name\": \"String\", \"description\": \"String\"}"
}

$.ajax(gamesPost).done(function (response) {
  console.log(response);
});


var users = {
  "async": true,
  "crossDomain": true,
  "url": "https://afternoon-beyond-89008.herokuapp.com/vbay-api/users/",
  "method": "GET",
  "headers": {}
}

var username = ["sonofkrypton","master23","dragon23","theflash","yolo","Aquaman","Batman"];

    var emp0 = jQuery.extend(true,{},users);
    var emp1 = jQuery.extend(true,{},users);
    var emp2 = jQuery.extend(true,{},users);
    var emp3 = jQuery.extend(true,{},users);
    var emp4 = jQuery.extend(true,{},users);
    var emp5 = jQuery.extend(true,{},users);
    var emp6 = jQuery.extend(true,{},users);
   
    emp0.url += username[0].toString();
    emp1.url += username[1].toString();
    emp2.url += username[2].toString();
    emp3.url += username[3].toString();
    emp4.url += username[4].toString();
    emp5.url += username[5].toString();
    emp6.url += username[6].toString();
    


$.ajax(emp0).always(function(response){
        $("#userfName0").html(response.fname);
        $("#userlName0").html(response.lname);
        $("#userID0").html(response.userid);
});

$.ajax(emp1).always(function(response){
        $("#userfName1").html(response.fname);
        $("#userlName1").html(response.lname);
        $("#userID1").html(response.userid);
});


$.ajax(emp2).always(function(response){
        $("#userfName2").html(response.fname);
        $("#userlName2").html(response.lname);
        $("#userID2").html(response.userid);
});

$.ajax(emp3).always(function(response){
        $("#userfName3").html(response.fname);
        $("#userlName3").html(response.lname);
        $("#userID3").html(response.userid);
});

$.ajax(emp4).always(function(response){
        $("#userfName4").html(response.fname);
        $("#userlName4").html(response.lname);
        $("#userID4").html(response.userid);
});

$.ajax(emp5).always(function(response){
        $("#userfName5").html(response.fname);
        $("#userlName5").html(response.lname);
        $("#userID5").html(response.userid);
});

$.ajax(emp6).always(function(response){
        $("#userfName6").html(response.fname);
        $("#userlName6").html(response.lname);
        $("#userID6").html(response.userid);
});