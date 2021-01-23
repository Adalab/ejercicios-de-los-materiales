// this file knows what the data is like
// this file requests the data from the json files

// const data = require('../data/products.json');
const data = require('.');

// const getProducts = () => {
//   const products = data.products.items;
//   return products.map(product => {
// los ids deben ser un string
//     product.id = product.id + '';
//     return product;
//   });
// };

const getProducts = () => {
  const stmt = data.db.prepare('SELECT * FROM products');
  const products = stmt.all();
  return products.map(product => {
    // los ids deben ser un string
    product.id = product.id + '';
    return product;
  });
};

module.exports = {
  getProducts: getProducts
};
