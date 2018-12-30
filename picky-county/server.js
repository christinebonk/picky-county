var express = require("express");
var app = express();
var port = process.env.PORT || 3001;
var path = require("path");
var routes = require("./controllers/controllers.js");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/build/')));

routes(app);

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});

