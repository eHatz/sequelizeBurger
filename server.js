
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var connection = require('./config/connection.js').connection;

var app = express();
var routes = require('./controllers/burgers_controller.js');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Listening on PORT ' + port);
});