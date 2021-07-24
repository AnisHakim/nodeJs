var http = require('http');
var url = require('url');

var portNumber = process.argv[2];

var server = http.createServer(function(request, response){
  var q = url.parse(request.url, true);
  var jsonObj = {};

  response.writeHead('200', {'Content-Type': 'application/json'});
  var date = new Date(q.query['iso']);

  if(q.pathname === '/api/parsetime'){
    jsonObj.hour = date.getHours();
    jsonObj.minute = date.getMinutes();
    jsonObj.second = date.getSeconds();

    response.write(JSON.stringify(jsonObj));

  } else if (q.pathname === '/api/unixtime'){
    jsonObj.unixtime = date.getTime();

    response.write(JSON.stringify(jsonObj));
    response.end();
  }
});

server.listen(portNumber);