const Moderation = require("../models/moderation");

exports.createThing = (req, res, next) => {
  const thing = new Moderation({
    username: req.body.username,
    ba: req.body.ba,
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

exports.getRandomModeration = (req, res, next) => {
  Moderation.count().exec(function (err, count) {
    var random = Math.floor(Math.random() * count++);
    Moderation.findOne()
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

exports.deleteModeration = (req, res , next) => {
  var _id = req.body._id;
  Moderation.findOneAndDelete({_id: _id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
  };