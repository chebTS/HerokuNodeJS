var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

  app.get('/', function(request, response) {
    //response.render('pages/index');
    response.redirect(301, 'http://ekreative.com');
  });

var requestQ = require('request');
 app.post('/', function(requestIn, response) {
    
	//console.log(requestIn.body);
	var s = requestIn.body
	requestQ.post({
		  headers: {'content-type' : 'application/json'},
		  json: true,
		  method: "POST",
		  url:     'http://skypebot.ekreative.com/receive',
		  body:    JSON.stringify(s)
	  }, function(error, response, body){
	  console.log(body);
	});
	response.end("ok");
    //response.redirect(301, 'http://skypebot.ekreative.com/receive');

 });


 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// app.post('/', function(request, response) {
//     response.redirect(301, 'http://skypebot.ekreative.com/receive');
//   });
