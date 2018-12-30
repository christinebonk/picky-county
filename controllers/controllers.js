var db = require("../models");
var bodyparser = require("body-parser");
const path = require("path");



function routes(app) {
	//pages
	app.get("/", function(req,res) {
		res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	//apis
	app.get("/api/houses", function(req,res) {
		db.Houses.findAll({}).then(function(result) {
			res.json(result);
		});
	});

	app.get("/api/points", function(req,res) {
		db.Points.findAll({}).then(function(result) {
			res.json(result);
		});
	});

	app.post("/api/points", function(req,res) {
		var description = req.body.description;
		var team = req.body.team;
		var date = req.body.date;
		var points = req.body.points;
		var user = req.body.user;
		var event = req.body.event;
		db.Points.create({
			description: description,
			team: team,
			date: date,
			points: points,
			user: user,
			event: event
		}).then(function(result) {
			res.json("complete");
		});
	});
}

module.exports = routes;