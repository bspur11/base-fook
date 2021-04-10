const {
  User
} = require('../models');

const UserController = {
  // get all pizzas
  getAllUser(req, res) {
    Pizza.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one pizza by id
  getPizzaById({
    params
  }, res) {
    Pizza.findOne({
        _id: params.id
      })
      .then(dbUserData => {
        // If no pizza is found, send 404
        if (!dbUserData) {
          res.status(404).json({
            message: 'No users found with this id!'
          });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
}


module.exports = UserController;