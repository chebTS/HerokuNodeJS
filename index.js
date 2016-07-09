var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

 // app.get('/', function(request, response) {
 //   response.render('pages/index');
 // });

 http.get('/',function(requese,res){  
 
			var querystring = require('querystring');
			var http = require('http');

			var data = querystring.stringify({
			      username: yourUsernameValue,
			      password: yourPasswordValue
			    });

			var options = {
			    host: 'http://skypebot.ekreative.com/receive',
			    port: 80,
			    path: '/',
			    method: 'POST',
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded',
			        'Content-Length': Buffer.byteLength(data)
			    }
			};

			var req = http.request(options, function(res) {
			    res.setEncoding('utf8');
			    res.on('data', function (chunk) {
			        console.log("body: " + chunk);
			    });
			});

			req.write(data);
			req.end();


     //res.redirect('http://skypebot.ekreative.com/receive')
 })



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


