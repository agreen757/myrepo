var express = require('express');
var cons = require('consolidate');


var app = express();
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.use(express.static(__dirname, 'public'));

app.get('/', function(request, response) {
  response.render('index')
});

app.listen(3000, function() {
  console.log("Listening on 3000");
});