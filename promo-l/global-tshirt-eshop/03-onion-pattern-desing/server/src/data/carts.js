// this file knows what the data is like
// this file requests the data from the json files
const data = require('../data/carts.json');

const getCartByUserId = userId => {
  const userCart = data.find(cart => cart.userId === userId);
  if (userCart) {
    return userCart.products;
  } else {
    return [];
  }
};

const updateCart = (userId, newProducts) => {
  const userCart = data.find(cart => cart.userId === userId);
  if (userCart) {
    userCart.products = newProducts;
    return userCart;
  } else {
    const newUserCart = {
      userId: userId,
      products: newProducts
    };
    data.push(newUserCart);
    return newUserCart;
  }
};

module.exports = {
  getCartByUserId: getCartByUserId,
  updateCart: updateCart
};
