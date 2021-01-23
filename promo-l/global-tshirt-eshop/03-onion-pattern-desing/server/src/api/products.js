// this file knows what to response
// this file requests data from the data folder
const productsData = require('../data/products');

// endpoint handler GET:/api/products
const getProducts = (req, res) => {
  const products = {
    items: productsData.getProducts()
  };
  console.log('GET:/api/products > products:', products);
  res.json({ products: products });
};

module.exports = {
  getProducts: getProducts
};
