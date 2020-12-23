const fakeDbUsers = [
  {
    name: 'Sofía'
  },
  {
    name: 'María'
  }
];

const getUsers = () => {
  return fakeDbUsers;
};

const addNewUser = userName => {
  fakeDbUsers.push({
    name: userName
  });
};

module.exports = {
  getUsers: getUsers,
  addNewUser: addNewUser
};
