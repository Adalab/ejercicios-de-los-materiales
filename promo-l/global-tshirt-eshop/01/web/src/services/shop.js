// shop products

const getProduct = (shopProducts, shopProductId) => {
  return shopProducts.find(product => product.id === shopProductId);
};

// cart products

const incrementCartProduct = (shopProducts, cartProducts, cartProductId) => {
  const cartProductFound = cartProducts.find(product => product.id === cartProductId);
  if (cartProductFound) {
    cartProductFound.units += 1;
  } else {
    const clickedProduct = shopProducts.find(product => product.id === cartProductId);
    clickedProduct.units = 1;
    cartProducts.push(clickedProduct);
  }
  return cartProducts;
};

const decrementCartProduct = (cartProducts, cartProductId) => {
  const cartProductFound = cartProducts.find(product => product.id === cartProductId);
  if (cartProductFound.units > 1) {
    cartProductFound.units -= 1;
  } else {
    const cartProductIndex = cartProducts.findIndex(product => product.id === cartProductId);
    cartProducts.splice(cartProductIndex, 1);
  }
  return cartProducts;
};

let deleteCartProduct;
deleteCartProduct = (cartProducts, cartProductId) => {
  const cartProductIndex = cartProducts.findIndex(product => product.id === cartProductId);
  cartProducts.splice(cartProductIndex, 1);
  return cartProducts;
};

// export

const exportObj = {
  decrementCartProduct: decrementCartProduct,
  deleteCartProduct: deleteCartProduct,
  getProduct: getProduct,
  incrementCartProduct: incrementCartProduct
};

export default exportObj;
