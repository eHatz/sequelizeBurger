var orm = require('../config/orm.js');

burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(res) { // the param res now contains the value from the table so it really looks like: function(dbRes)
			cb(res);
		});
	},
	create: function(name) {
		orm.insert('burgers', name);
	},

	update: function(id) {
		orm.update('burgers', id);
	}

};
