const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile(__dirname + '/views/index.html', 'utf8', function(err, text){
    if(err) throw err;
    response.end(text);
});
}).listen(port);

console.log(`Server running at http://localhost:${port}`);