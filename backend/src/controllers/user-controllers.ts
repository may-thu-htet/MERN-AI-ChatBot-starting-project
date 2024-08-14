import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/tokens-manager.js";
import { cookie } from "express-validator";
import { COOKIE_NAME } from "../utils/constants.js";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get all users
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "Error", cause: error.message });
  }
};

const userSignup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // user sign up
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(401).send("User already registered");
    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // create token and store cookies
    res.clearCookie(COOKIE_NAME, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true,
    });
    const token = createToken(user.id, user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });

    return res
      .status(201)
      .json({ message: "OK", name: user.name, email: user.email });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "Error", cause: error.message });
  }
};

const userLogIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // user log in
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("User not registered");
    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) return res.status(403).send("Incorrect password");

    // create token and store cookies

    res.clearCookie(COOKIE_NAME, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true,
    });
    const token = createToken(user.id, user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });

    return res
      .status(200)
      .json({ message: "OK", name: user.name, email: user.email });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "Error", cause: error.message });
  }
};

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // user token check

    const user = await User.findById(res.locals.jwtData.id);

    if (!user)
      return res.status(401).send("User not registered OR token malfunctioned");
    console.log(user._id.toString(), res.locals.jwtData.id);

    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permission didn't match");
    }

    return res
      .status(200)
      .json({ message: "OK", name: user.name, email: user.email });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "Error", cause: error.message });
  }
};

const userLogout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // user token check

    const user = await User.findById(res.locals.jwtData.id);

    if (!user)
      return res.status(401).send("User not registered OR token malfunctioned");
    console.log(user._id.toString(), res.locals.jwtData.id);

    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permission didn't match");
    }

    res.clearCookie(COOKIE_NAME, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true,
    });

    return res
      .status(200)
      .json({ message: "OK", name: user.name, email: user.email });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "Error", cause: error.message });
  }
};

export { getAllUsers, userSignup, userLogIn, verifyUser, userLogout };
