require("dotenv").config();

const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const { sendValidationMail } = require("../nodemailer");

exports.signup = (req, res, next) => {
  User.count().exec(function (err, count) {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new User({
        username: "Anonyme #" + count++,
        email: req.body.email,
        password: hash,
        admin: false,
        accountConfirmed: false,
      });
      user
        .save()
        .then(() => {
          sendValidationMail(req.body.email);
          res.status(201).json({
            message: "User added successfully!",
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          });
        });
    });
  });
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error("User not found!"),
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error("Incorrect password!"),
            });
          }
          const token = jwt.sign(
            { userId: user._id,
            username: user.username },
            process.env.ACCESS_TOKEN_SECRET
          );
          res.status(200).json({
            userId: user._id,
            token: token,
            username: user.username,
            admin: user.admin
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};
