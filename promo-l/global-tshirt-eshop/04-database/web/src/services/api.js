// enviroment variables: more info at https://create-react-app.dev/docs/adding-custom-environment-variables/
const isDevEnviroment = process.env.NODE_ENV === 'development';
const apiBaseUrl = isDevEnviroment ? '//localhost:3000/api' : './api';

// login / logout

const getUser = userId => {
  return fetch(`${apiBaseUrl}/user?userId=${userId}`)
    .then(response => response.json())
    .then(data => data.user);
};

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
  return fetch(`${apiBaseUrl}/cart?userId=${userId}`)
    .then(response => response.json())
    .then(data => data.products);
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
  getUser: getUser,
  sendLogin: sendLogin,
  getCart: getCart,
  sendCart: sendCart
};

export default exportObj;
