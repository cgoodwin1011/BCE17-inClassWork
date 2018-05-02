// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 8080;
var PORTA = 7000;
var PORTB = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

function handleRequestA(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("<h1>You are so beautiful</h1>");
}

function handleRequestB(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("we need to talk about your deodorant");
  }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var serverA = http.createServer(handleRequestA);
var serverB = http.createServer(handleRequestB);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
});


serverA.listen(PORTA, function(request, response) {

})

serverB.listen(PORTB, function(request, response) {

})
