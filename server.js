var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port =  process.env.PORT || 8080;

app.get('/', function(req,res){
	res.render('index');
});

app.get('/about', function(req,res) {
	res.render('about');
});

app.get('/contact', function(req,res) {
	res.render('contact');
});

app.listen(port, function(){
	console.log("app started on port: " + port);
});