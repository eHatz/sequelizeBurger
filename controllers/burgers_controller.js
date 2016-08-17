var express = require('express');
var methodO = require('method-override');
var bodyParse = require('body-parser');
var router = express.Router();
var orm = require('../models/burger.js');

router.get('/', function(req, res) {
	burger.all(function(data) { // function takes on value of dbRes which was passed from orm.js to burger.js to here, function really looks like: function(dbRes)

		var devouredBurg = [];
		var newBurg = [];

		for (var i = 0; i < data.length; i++) {
			if (data[i].devoured === 0) {
				newBurg.push(data[i]);
			} else {
				devouredBurg.push(data[i])
			}
		};
		var allBurgers = {
			new: newBurg,
			devoured: devouredBurg
		};
		res.render('index', allBurgers);
	})

});

router.post('/create', function(req, res) {
	burger.create(req.body.burger_name);
	res.redirect('/');
});

router.post('/devoured/:id', function(req, res){
	burger.update(req.body.id);
	res.redirect('/')
});

module.exports = router;