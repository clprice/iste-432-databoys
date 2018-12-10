
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