var express = require('express');
var methodO = require('method-override');
var bodyParse = require('body-parser');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
	models.burgers.findAll({ where: {devoured: false} }).then(function(data) {

		var devouredBurg = [];
		var newBurg = [];

		for (var i = 0; i < data.length; i++) {
			if (data[i].devoured === false) {
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
	});
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