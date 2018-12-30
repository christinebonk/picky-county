var db = require("../models");
var bodyparser = require("body-parser");
const path = require("path");



function routes(app) {
	//pages
	app.get("/", function(req,res) {
		res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	//api
	app.get("/api/houses", function(req,res) {
		db.Houses.findAll({}).then(function(result) {
			res.json(result);
		});
	})
	
	
}

module.exports = routes;