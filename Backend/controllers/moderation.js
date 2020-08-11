const Moderation = require("../models/moderation");

exports.createThing = (req, res, next) => {
  const thing = new Moderation({
    username: req.body.username,
    ba: req.body.ba,
    display: false,
    greets: 0,
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};