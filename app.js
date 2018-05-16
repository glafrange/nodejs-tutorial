var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8');

myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  console.log(chunk);
});



// var http = require('http');

// var server = http.createServer(function(req,res){
//   console.log("request was made " + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hey ninjas');
// });

// server.listen(1337, '127.0.0.1');
// console.log('listening to port 1337');