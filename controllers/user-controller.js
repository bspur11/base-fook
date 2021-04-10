const {
  User
} = require('../models');

const UserController = {
  // get all users
  getAllUser(req, res) {
    User.find({})
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one user by id 18.1.6
  getUserById({
    params
  }, res) {
    User.findOne({
        _id: params.id
      })
      .populate([{
          path: 'thoughts',
          select: "-__v"
        },
        {
          path: 'friends',
          select: "-__v"
        },
      ])
      .select('-__v')
      .then(dbUserData => {
        // If no User is found, send 404
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

  // createUser
  createUser({
    body
  }, res) {
    User.create(body)
      .then(deUserData => res.json(deUserData))
      .catch(err => res.status(400).json(err));
  },

  // update User by id 18.5.3 runvalidators
  updateUser({
    params,
    body
  }, res) {
    User.findOneAndUpdate({
        _id: params.id
      }, body, {
        new: true,
        runvalidators: true
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({
            message: 'No User found with this id!'
          });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete User
  deleteUser({
    params
  }, res) {
    // delete the user
    User.findOneAndDelete({
        _id: params.id
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({
            message: 'No user found with this id'
          });
          return;
        }
        // remove the user from any friends arrays
        User.updateMany({
            _id: {
              $in: dbUserData.friends
            }
          }, {
            $pull: {
              friends: params.id
            }
          })
          .then(() => {
            // remove any comments from this user
            Thought.deleteMany({
                username: dbUserData.username
              })
              .then(() => {
                res.json({
                  message: "Successfully deleted user"
                });
              })
              .catch(err => res.status(400).json(err));
          })
          .catch(err => res.status(400).json(err));
      })
      .catch(err => res.status(400).json(err));
  },
}
// Check for remove comments from friends arrays***




module.exports = UserController;