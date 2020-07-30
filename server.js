var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser"),
  controller = require("./controller");
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:1234",
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes");
routes(app);

app.listen(port);
console.log("server started on: " + port);
