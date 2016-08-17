var connection = require('./connection.js').connection;


var orm = {
	selectAll: function(table, cb) {
		connection.query('SELECT * FROM ' + table, function(err, dbRes){
			if (err) {
				throw err;
			};
			cb(dbRes); //cb = callback function. When this function is called later it will look like this function(dbRes) and will carry the table array with it
		});
	},

	insert: function(table, name) {
		var newBurger = {
			burger_name: name,
			devoured: false
		}
		connection.query('INSERT INTO ' + table + ' SET ?', newBurger, function(err, dbRes) {
			if (err) {
				throw err;
			};
		})
	},

	update: function(table, id){
		var updateVals = [
		{devoured: true}, 
		{id: id}
		];
		connection.query('UPDATE ' + table + ' SET ? WHERE ?', updateVals, function(err, dbRes) {
			if (err) {
					throw err;
			};

		})
	}
};

module.exports = orm;