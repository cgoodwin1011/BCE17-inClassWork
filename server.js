
var http = require('http');

var PORT = 8080;

function handleRequest(request, response) {
  response.end("hello world, path his:" + request.url);
}

var server = http.createServer.apply(handleRequest);

server.listen(PORT, function () {
  console.log("server is listening on port http://localhost:"+PORT)
})