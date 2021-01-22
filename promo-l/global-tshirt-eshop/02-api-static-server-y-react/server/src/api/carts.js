const apiUsers = require('./users');
const cartsData = require('../data/carts.json');

// función que comprueba si un usuario tiene o no el carro de la compra en carts.json

const existsCartByUserId = userId => {
  return !!cartsData.find(cart => cart.userId === userId);
};

// función que devuelve el carro de la compra de un usuario dado

const getCartByUserId = userId => {
  return cartsData.find(cart => cart.userId === userId);
};

// función que maneja el endpoint GET:/api/cart

const getUserCart = (req, res) => {
  // obtengo el usuario del query param
  const requestUserId = req.query.userId;
  // compruebo si el usuario existe
  const isValidUserId = apiUsers.isValidUserId(requestUserId);
  if (!isValidUserId) {
    // el usuario no existe > devuelvo un error
    res.status(403).json({
      error: 'user-not-exist',
      message: 'Can not return the cart'
    });
    return;
  }

  // compruebo si el usuario tiene ya una cesta de la compra
  const existsUserCart = existsCartByUserId(requestUserId);
  if (existsUserCart) {
    // obtengo el carro de la compra del usuario
    const userCart = getCartByUserId(requestUserId);
    // respondo devolviendo los productos del carro del usuario
    const result = { products: userCart.products };
    res.json(result);
    console.log('User cart:', result);
  } else {
    // respondo con un array vacío que es el carro de la compra por defecto de cualquier usuario
    const result = { products: [] };
    res.json(result);
    console.log('User cart:', result);
  }
}

// función que maneja el endpoint POST:/api/cart

const updateUserCart = (req, res) => {
  // obtengo el usuario del query param y los productos del carro del body
  const requestUserId = req.query.userId;
  const requestCart = req.body;
  // compruebo si el usuario existe
  const isValidUserId = apiUsers.isValidUserId(requestUserId);
  if (!isValidUserId) {
    // el usuario no existe > devuelvo un error
    res.status(403).json({
      error: 'user-not-exist',
      message: 'Can not return the cart'
    });
    return;
  }

  // compruebo si el usuario tiene ya una cesta de la compra
  const existsUserCart = existsCartByUserId(requestUserId);
  if (existsUserCart) {
    // obtengo el carro de la compra del usuario
    const userCart = getCartByUserId(requestUserId);
    // actualizo el carro de la compra del usuario
    userCart.products = requestCart;
    // respondo diciendo que todo ha ido bien
    res.json({ result: 'ok' })
  } else {
    // no existe el carro de la compra, el usuario es la primera vez que añade un producto
    // creo un nuevo carro de la compra para este usuario, con sus productos
    const newCart = {
      userId: requestUserId,
      products: requestCart
    }
    // lo añado al array de carros de la compra
    cartsData.push(newCart)
    // respondo diciendo que todo ha ido bien
    res.json({ result: 'ok' })
  }
  console.log('Cart updated:', cartsData)
};

module.exports = {
  getUserCart: getUserCart,
  updateUserCart: updateUserCart
};
