// this file knows what to response
// this file requests data from the data folder
const usersData = require('../data/users');
const cartsData = require('../data/carts');

// endpoint handler GET:/api/cart
const getUserCart = (req, res) => {
  const requestUserId = req.query.userId;
  const isValidUserId = usersData.isValidUserId(requestUserId);
  if (isValidUserId) {
    const userCart = {
      products: cartsData.getCartByUserId(requestUserId)
    };
    console.log('GET:/api/cart > userCart', userCart);
    res.json(userCart);
  } else {
    res.status(403).json({
      error: 'user-not-exist',
      message: 'Can not return the cart'
    });
  }
};

// endpoint handler POST:/api/cart
const updateUserCart = (req, res) => {
  const requestUserId = req.query.userId;
  const requestCartProducts = req.body;
  const isValidUserId = usersData.isValidUserId(requestUserId);
  if (isValidUserId) {
    const newUserCart = cartsData.updateCart(requestUserId, requestCartProducts);
    console.log('POST:/api/cart > newUserCart', newUserCart);
    res.json({ result: 'ok' });
  } else {
    res.status(403).json({
      error: 'user-not-exist',
      message: 'Can not return the cart'
    });
  }
};

module.exports = {
  getUserCart: getUserCart,
  updateUserCart: updateUserCart
};
