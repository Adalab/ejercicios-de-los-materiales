const apiBaseUrl = '//localhost:3000/api';

// login

const sendLogin = userData => {
  return fetch(`${apiBaseUrl}/login`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

// products

const getProducts = () => {
  return fetch(`${apiBaseUrl}/products`)
    .then(response => response.json())
    .then(data => data.products.items);
};

// cart

const getCart = userId => {
  return fetch(`${apiBaseUrl}/cart?userId=${userId}`);
};

const sendCart = (userId, cartProducts) => {
  const cartItems = cartProducts.map(product => {
    return {
      id: product.id,
      units: product.units
    };
  });

  return fetch(`${apiBaseUrl}/cart?userId=${userId}`, {
    method: 'POST',
    body: JSON.stringify(cartItems),
    headers: { 'Content-Type': 'application/json' }
  });
};

// export

const exportObj = {
  getProducts: getProducts,
  sendLogin: sendLogin,
  getCart: getCart,
  sendCart: sendCart
};

export default exportObj;
