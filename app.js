const http = require('http');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<html><body><h1>Hello World!<br>I\'m Faouzi</h1></body></html>');
}).listen(port);

console.log(`Server running at http://localhost:${port}`);