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

var request = require('request'); // npm install request
app.post('^*$', function(req, res) {
	res.redirect(307, 'http://skypebot.ekreative.com/receive' );
    // request({ url: 'http://remoteserver.com' + req.path, headers: req.headers, body: req.body },
    //  		function(err, remoteResponse, remoteBody) {
    //     	if (err) { return res.status(500).end('Error'); 
    //     	}
    //     res.writeHead(...); // copy all headers from remoteResponse
    //     res.end(remoteBody);
    // });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


