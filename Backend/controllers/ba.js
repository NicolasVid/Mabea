const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {
    const thing = new Thing({
      username: req.body.username,
      ba: req.body.ba,
      display: false,
      greets: 0
    });
    thing.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
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

  exports.getRandomBa = (req, res, next) => {
    Thing.count().exec(function (err, count) {
      var random = Math.floor(Math.random() * count++)
      Thing.findOne().skip(random).then(
        (things) => {
          res.status(200).json(things)
        }).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
  });
  };

  exports.greet = (req, res, next) => {
    Thing.updateOne(
      {_id: sessionStorage.getItem('_id')}, {greets: 1}
    ).then(
      () => {
        res.status(201).json({
          message: 'Ba updated successfully!'
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