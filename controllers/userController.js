const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
    .sort({'updatedAt': -1})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.User.findByName(req.params.name)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("req", req)
    db.User.findOneAndUpdate({ name: req.params.name }, req.body)
      .then(function(dbUser) {
        console.log("dbUser", dbUser)
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};