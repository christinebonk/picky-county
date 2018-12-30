var db = require("../models");
var bodyparser = require("body-parser");
const path = require("path");



function routes(app) {

	app.get("/", function(req,res) {
		res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});
	
	
}

module.exports = routes;