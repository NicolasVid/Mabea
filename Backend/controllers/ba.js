const ba = require("../models/ba");

exports.getRandomBa = (req, res, next) => {
  ba.count().exec(function (err, count) {
    var random = Math.floor(Math.random() * count++);
    ba.findOne()
      .skip(random)
      .then((things) => {
        res.status(200).json(things);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  });
};

exports.greet = (req, res, next) => {
  ba.findOneAndUpdate({_id: req.body._id},
  {greets: req.body.greeted})
    .then(() => {
      res.status(201).json({
        message: "Ba updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.createBa = (req, res, next) => {
  const thing = new ba({
    username: req.body.username,
    ba: req.body.ba,
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