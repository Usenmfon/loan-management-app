const express = require("express");
const {
  getLoanController,
  createLoanController,
} = require("../controller/loan");

const {
  createUserController,
  getUserController,
} = require("../controller/user");

const routes = express.Router();

routes.get("/loan", getLoanController);
routes.post("/loan", createLoanController);
routes.get("/user", getUserController);
routes.post("/user", createUserController);

module.exports = routes;
