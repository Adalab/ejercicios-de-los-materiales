const productsData = require('../data/products.json');

// función que maneja el endpoint GET:/api/products

const getProducts = (req, res) => {
  res.json(productsData);
};

module.exports = {
  getProducts: getProducts
};
