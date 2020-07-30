"use strict";

module.exports = function (app) {
  var controller = require("./controller");
  app.route("/").get(controller.index);
  app.route("/getAllUsers").get(controller.getAllUsers);
  app.route("/users/:id").get(controller.findUsers);
  app.route("/users").post(controller.createUsers);
  app.route("/users").put(controller.updateUsers);
  app.route("/users/:id").delete(controller.deleteUsers);
};
