var friends = require('../data/friends');

module.exports = function (app) {

  app.get("/api", function (req, res) {
    res.json(friends);
  });

  app.post("/api/new", function (req, res) {

    var newUser = req.body;

    console.log(newUser);

    friends.push(newUser);

    res.json(newUser);

  });
};
