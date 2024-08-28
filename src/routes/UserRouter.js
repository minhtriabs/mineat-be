import express from "express";
import UserController from "../controllers/UserController.js";
import userValidator from "../middleware/userValidator.js";
var UserRouter = express.Router();

UserRouter.route("/").get((req, res) => {
  UserController.getAllUsers(req, res);
});
UserRouter.route("/").post((req, res) => {
  UserController.getUser(req, res);
});
UserRouter.route("/login").post((req, res) => {
  UserController.login(req, res);
});
UserRouter.route("/register").post(
  userValidator.checkEmailExistence,
  (req, res) => {
    UserController.register(req, res);
  },
);
UserRouter.route("/update").post((req, res) => {
  UserController.updateOne(req, res);
});
export default UserRouter;
