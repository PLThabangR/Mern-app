//Import  express
const express = require("express");
//create s router variable with express
const router = express.Router();
const User = require("../Model/User");
const {
  check,
  validationResult,
  buildCheckFunction,
} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../Middleware/auth");

//@route get api/auth
//@desc  get logged user
//@access  Private
router.get("/", auth, async (req, res) => {
  try {
    //User mongoose to find the user Id
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch {
    console.error(err.message);
  }
});

//@route post api/auth
//@desc  Auth user and get token
//@access  Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    //Give us the data send to the routes
    //To use this we need a middleware
    const errors = validationResult(req); //creating a errors variable which check errors from req
    if (!errors.isEmpty()) {
      //Use if statement to check if error variable is empty or not
      return res.status(400).json({ errors: errors.array() }); //If the errors variable is not empty return a bad status request
    }

    const { email, password } = req.body;

    try {
      //check is user  email exist
      let user = await User.findOne({ email });
      //if user email does not exist return a error
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      //Check if the password matches the one in the data base
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      //Create a pay load the objet we will send as a respond
      //Object we are ssending in the token
      const payload = {
        user: {
          id: user.id,
        },
      };

      //we are creating a token
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          //throw error
          if (err) throw err;
          //pass the object token to the respond
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
