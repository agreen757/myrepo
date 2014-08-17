var express = require('express');
var fs = require('fs');
//var htmlfile = "index2.html";
var cons = require("consolidate");

//var app = express.createServer(express.logger());
var app = express();
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.use(express.static(__dirname, 'public'));

app.get('/', function(request, response) {
  //response.render('index2dee')
});

var port = process.env.PORT || 3000;
app.listen(3000, function() {
  console.log("Listening on " + port);
});