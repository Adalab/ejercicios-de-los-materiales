// this file knows what the data is like
// this file requests the data from the json files
const usersData = require('./users.json');

const isValidUserId = userId => {
  return !!usersData.find(user => user.id === userId);
};

const getUserById = userId => {
  return usersData.find(user => user.id === userId);
};

const getUserByEmailAndPassword = (email, password) => {
  return usersData.find(user => user.email === email && user.password === password);
};

module.exports = {
  isValidUserId: isValidUserId,
  getUserById: getUserById,
  getUserByEmailAndPassword: getUserByEmailAndPassword
};
