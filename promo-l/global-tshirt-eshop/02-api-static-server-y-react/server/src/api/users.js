const usersData = require('../data/users.json');

// función que comprueba si un usuario existe, usando su id

const isValidUserId = userId => {
  return !!usersData.find(user => user.id === userId);
};

// función que maneja el endpoint POST:/api/login

const login = (req, res) => {
  const userFound = usersData.find(
    user => user.email === req.body.email && user.password === req.body.password
  );

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


// función que maneja el endpoint GET:/api/user

const getUser = (req, res) => {
  const userFound = usersData.find(user => user.id === req.query.userId);

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
  isValidUserId: isValidUserId,
  getUser: getUser,
  login: login
};
