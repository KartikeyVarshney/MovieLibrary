const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("./models/User.model");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
dotenv.config();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    let newUser = new User({ username, email });
    await User.register(newUser, password);
    console.log("You are successfully signed up");
    res.status(201).json({ message: "You are successfully signed up" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error during signup" });
  }
});

app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Error during authentication:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!user) {
      console.warn("Authentication failed:", info.message);
      return res.status(401).json({ message: "Authentication failed" });
    }
    req.login(user, (err) => {
      if (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      console.log(`Welcome ${user.username}`);
      return res
        .status(200)
        .json({
          message: "You are successfully logged in",
          username: user.username,
        });
    });
  })(req, res, next);
});

app.get("/api/logout", (req, res) => {
  req.logout(() => {
    return res.status(201).json({ message: "You are successfully logged out" });
  });
});

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
