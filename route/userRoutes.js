import { dashboard, login } from "../controller/userController.js";
import express from "express";
import auth from "../middleware/auth.js";

const userRoutes=express.Router();
userRoutes.route("/login").post(login);
//userRoutes.route("/dashboard").get()
userRoutes.get("/dashboard",auth, dashboard);
export default userRoutes;
