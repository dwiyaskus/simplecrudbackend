"use strict";

var response = require("./res");
var connection = require("./conn");

exports.getAllUsers = function (req, res) {
  connection.query("SELECT * FROM employee", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.index = function (req, res) {
  response.ok("Server Connected", res);
};

exports.findUsers = function (req, res) {
  var id = req.params.id;
  connection.query("SELECT * FROM employee where Id = ?", [id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.createUsers = function (req, res) {
  var name = req.body.name;
  var password = req.body.password;
  var email = req.body.email;
  var username = req.body.username;
  connection.query(
    "INSERT INTO employee (name, password, email,username) values (?,?,?,?)",
    [name, password, email, username],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Success", res);
      }
    }
  );
};

exports.updateUsers = function (req, res) {
  var id = req.body.id;
  var name = req.body.name;
  var password = req.body.password;
  var email = req.body.email;
  var username = req.body.username;
  connection.query(
    "UPDATE employee SET name = ?, password = ?, email = ?, username = ? WHERE Id = ?",
    [name, password, email, username, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Success", res);
      }
    }
  );
};

exports.deleteUsers = function (req, res) {
  var id = req.params.id;
  connection.query("DELETE FROM employee WHERE Id = ?", [id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Success", res);
    }
  });
};
