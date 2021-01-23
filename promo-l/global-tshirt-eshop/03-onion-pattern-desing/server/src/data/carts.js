// this file knows what the data is like
// this file requests the data from the json files

// const data = require('../data/carts.json');
const data = require('./index');

// const getCartByUserId = userId => {
//   const userCart = data.find(cart => cart.userId === userId);
//   if (userCart) {
//     return userCart.products;
//   } else {
//     return [];
//   }
// };

const getCartByUserId = userId => {
  const stmt = data.db.prepare('SELECT * FROM cartProducts WHERE userId = ?');
  const cartProducts = stmt.all(userId);
  return cartProducts.map(cartProduct => {
    return {
      // los ids deben ser un string
      id: cartProduct.productId + '',
      units: cartProduct.units
    };
  });
};

// const updateCart = (userId, newProducts) => {
//   const userCart = data.find(cart => cart.userId === userId);
//   if (userCart) {
//     userCart.products = newProducts;
//     return userCart;
//   } else {
//     const newUserCart = {
//       userId: userId,
//       products: newProducts
//     };
//     data.push(newUserCart);
//     return newUserCart;
//   }
// };

const updateCart = (userId, newProducts) => {
  // delete previous cart products
  const deleteStmt = data.db.prepare(`DELETE FROM cartProducts WHERE userId = ?`);
  deleteStmt.run(userId);
  // add new cart products
  const insertStmt = data.db.prepare(
    `INSERT INTO cartProducts (userId, productId, units) VALUES(?, ?, ?)`
  );
  newProducts.forEach(cart => {
    insertStmt.run(userId, cart.id, cart.units);
  });
  return {
    userId: userId,
    products: newProducts
  };
};

module.exports = {
  getCartByUserId: getCartByUserId,
  updateCart: updateCart
};
