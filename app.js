var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
  console.log("request was made " + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  res.end(JSON.stringify(myObj));
});

server.listen(1337, '127.0.0.1');
console.log('listening to port 1337');