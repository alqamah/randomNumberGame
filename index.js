import express from "express";
import cookieParser from "cookie-parser";
import {
  handleGame,
  handleLogin,
  handlePost,
  handleSignUp,
  renderLogin,
  renderSignUp,
} from "./user.controller.js";
import session from "express-session";
import {auth} from "./middleware/auth.js"
import { generateRandomNumber } from "./middleware/generateRandomNumber.js";

const app = express();

app.use(session({
  secret:'key',
  resave:false,
  saveUninitialized:true,
  cookie:{secure:false}
}));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", auth, generateRandomNumber, handleGame);
app.post("/guess", handlePost);

app.get("/login", renderLogin);
app.get("/signup", renderSignUp);

app.post("/login", handleLogin);
app.post("/signup", handleSignUp);

export default app;
