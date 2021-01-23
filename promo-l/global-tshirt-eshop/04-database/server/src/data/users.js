// this file knows what the data is like
// this file requests the data from the json files

// const usersData = require('./users.json');
const data = require('./index');

// const isValidUserId = userId => {
//   return !!usersData.find(user => user.id === userId);
// };

const isValidUserId = id => {
  const stmt = data.db.prepare('SELECT * FROM users WHERE id= ?');
  const user = stmt.get(id);
  return user === undefined ? false : true;
};

// const getUserById = id => {
//   return usersData.find(user => user.id === req.query.userId);
// };

const getUserById = id => {
  const stmt = data.db.prepare('SELECT * FROM users WHERE id= ?');
  const user = stmt.get(id);
  return user;
};

// const getUserByEmailAndPassword = (email, password) => {
//   return usersData.find(user => user.email === email && user.password === password);
// };

const getUserByEmailAndPassword = (email, password) => {
  const stmt = data.db.prepare('SELECT * FROM users WHERE email= ? AND password= ?');
  const user = stmt.get(email, password);
  return user;
};

module.exports = {
  isValidUserId: isValidUserId,
  getUserById: getUserById,
  getUserByEmailAndPassword: getUserByEmailAndPassword
};
