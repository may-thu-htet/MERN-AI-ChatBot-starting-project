import { Router } from "express";
import {
  getAllUsers,
  userLogIn,
  userLogout,
  userSignup,
  verifyUser,
} from "../controllers/user-controllers.js";
import {
  logInValidator,
  signUpValidator,
  validate,
} from "../utils/validators.js";
import { verifyToken } from "../utils/tokens-manager.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signUpValidator), userSignup);
userRoutes.post("/login", validate(logInValidator), userLogIn);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;
