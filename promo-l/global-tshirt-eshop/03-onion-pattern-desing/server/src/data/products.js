// this file knows what the data is like
// this file requests the data from the json files
const data = require('../data/products.json');

const getProducts = () => {
  return data.products.items;
};

module.exports = {
  getProducts: getProducts
};
