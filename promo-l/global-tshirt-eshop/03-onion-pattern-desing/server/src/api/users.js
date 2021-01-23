// this file knows what to response
// this file requests data from the data folder
const usersData = require('../data/users');

// endpoint handler POST:/api/login
const login = (req, res) => {
  const userFound = usersData.getUserByEmailAndPassword(req.body.email, req.body.password);
  console.log('POST:/api/login > userFound:', userFound);
  if (userFound) {
    res.json({
      error: false,
      userId: userFound.id
    });
  } else {
    res.status(404).json({
      error: 'user-not-found',
      message: 'User not found'
    });
  }
};

// endpoint handler GET:/api/user
const getUser = (req, res) => {
  const userFound = usersData.getUserById(req.query.userId);
  console.log('GET:/api/user > userFound:', userFound);
  if (userFound) {
    res.json({
      error: false,
      user: userFound
    });
  } else {
    res.status(404).json({
      error: 'user-not-found',
      message: 'User not found'
    });
  }
};

module.exports = {
  getUser: getUser,
  login: login
};
