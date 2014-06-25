var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

//var app = express.createServer(express.logger());
var app = express();

app.get('/', function(request, response) {
  var fs = require('fs');
  var buf = fs.readFileSync('index.html', 'utf8');
  response.send(buf.toString());
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
