// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});

function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  fs.readFile(path, function(err, data) {

    // Depending on the URL, display a different HTML file.
    switch (path) {

    case "index.html":
      return displayRoot(path, req, res);
      break;
    case "favoriteFoods.html":
      return displayPortfolio(path, req, res);
      break;
    case "favoriteMovies.html":
      return displayPortfolio(path, req, res);
      break;
    case "favoriteFramework.html":
      return displayPortfolio(path, req, res);
      break;
    default:
      return display404(path, req, res);
  }
}