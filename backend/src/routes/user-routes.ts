import { Router } from "express";
import {
  getAllUsers,
  userLogIn,
  userSignup,
} from "../controllers/user-controllers.js";
import {
  logInValidator,
  signUpValidator,
  validate,
} from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signUpValidator), userSignup);
userRoutes.post("/login", validate(logInValidator), userLogIn);

export default userRoutes;
