const bcrypt = require('bcryptjs');

const { 
  authenticate, 
  generateToken 
} = require('../auth/authenticate');
const Users = require('../data/models/users-model');

module.exports = server => {
  server.post('/api/register', register);
}

function register(req, res) {
  let user = req.body;
  console.log(req.body);
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res
        .status(201)
        .json({
          message: 'This new user has been successfully registered!',
          saved
        });
    })
    .catch(error => {
      res
        .status(500)
        .json(error);
    });
};