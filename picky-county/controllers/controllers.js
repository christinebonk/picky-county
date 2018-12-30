var db = require("../models");
var bodyparser = require("body-parser");
const path = require("path");



function routes(app) {

	app.get("/", authenticationMiddleware(), function(req,res) {
		res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});
	
	
}

