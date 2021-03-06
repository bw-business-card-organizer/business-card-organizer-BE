const bcrypt = require('bcryptjs');

const { 
  authenticate, 
  generateToken 
} = require('../auth/authenticate');
const Users = require('../data/models/users-model');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/users', authenticate, getUsers);
}

function getUsers(req, res) {
  Users.find()
    .then(users => {
      res
        .status(200)
        .json(users)
    })
    .catch(error => {
      res
        .status(500)
        .json(error);
    });
}

function register(req, res) {
  let user = req.body;
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

function login(req, res) {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res
          .status(200)
          .json({
            message: `Welcome, ${user.firstName}! Here is a token for your troubles!`,
            token
          });
      } else {
        res
          .status(401)
          .json({
            message: "Something's not right here... let's try again!"
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json(error);
    });
};