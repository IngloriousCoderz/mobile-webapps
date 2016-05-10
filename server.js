var http = require('http');
var weightedAverage = require('./math-utils').weightedAverage;

var server = http.createServer(function (req, res) {
  var avg = weightedAverage([18, 21, 30], [5, 5, 6]);
  res.end('<html><body><h1>Hello world!</h1><p>My avg: ' + avg + '</p></body></html>');
});

server.on('/about', function(req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write('We are young');
    res.write('We are strong');
    res.write('We’re not looking for where we belong');
    res.end();
  }
});

server.listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
