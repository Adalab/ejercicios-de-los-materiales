// this file knows what the data is like
// this file requests the data from the json files

// const data = require('../data/products.json');
const data = require('./index');

// const getProducts = () => {
//   return data.products.items;
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
