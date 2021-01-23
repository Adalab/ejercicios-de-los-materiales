import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './cart/List';
import Login from './user/Login';
import Profile from './user/Profile';
import Products from './products/List';
import ProductDetail from './products/Detail';
import api from '../services/api';
import shop from '../services/shop';
import localStorage from '../services/localStorage';

const App = () => {
  // state
  const localStorageUser = localStorage.get('user');
  const [userId, setUserId] = useState(localStorageUser.userId || '');
  const [userData, setUserData] = useState({});
  const [loginError, setLoginError] = useState('');
  const [shopProducts, setShopProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [filterText, setFilterText] = useState('');

  // effects: obtengo los productos al arrancar la página
  useEffect(() => {
    api.getProducts().then(data => {
      setShopProducts(data);
    });
  }, []);

  // effects: obtengo el carro de la compra cuando ya tengo el userId
  useEffect(() => {
    // si el userId es diferente de vacío pido el carro de la compra al servidor
    if (userId) {
      api.getCart(userId).then(data => {
        setCartProducts(data);
      });
    }
  }, [userId]);

  // effects: obtengo los datos del usuario
  useEffect(() => {
    // si el userId es diferente de vacío pido el carro de la compra al servidor
    if (userId) {
      api.getUser(userId).then(data => {
        setUserData(data);
      });
    }
  }, [userId]);

  // events

  const handleLogin = data => {
    api.sendLogin(data).then(data => {
      if (data.error) {
        // guardo el error en el estado para que se pinte
        setLoginError(data.message);
      } else {
        // limpio el error
        setLoginError('');
        // guardo el usuario en el estado y en localStorage
        setUserId(data.userId);
        localStorage.set('user', data);
      }
    });
  };

  const handleFilter = filterText => {
    setFilterText(filterText);
  };

  const incrementCartProduct = clickedProductId => {
    const newCartProducts = shop.incrementCartProduct(shopProducts, cartProducts, clickedProductId);
    updateCart(newCartProducts);
  };

  const decrementCartProduct = clickedProductId => {
    const newCartProducts = shop.decrementCartProduct(cartProducts, clickedProductId);
    updateCart(newCartProducts);
  };

  const deleteCartProduct = clickedProductId => {
    shop.deleteCartProduct(cartProducts, clickedProductId);
    updateCart(cartProducts);
  };

  const updateCart = cartProducts => {
    setCartProducts([...cartProducts]);
    api.sendCart(userId, cartProducts);
  };

  const handleCloseSession = () => {
    // borro el local storage del navegador
    localStorage.remove('user');
    // refresco la página para que la web se reinicie
    window.location.reload();
    // no hace falta enviar nada al servidor porque el servidor no sabe
    // si el usuario está logado o no
  };

  // render

  const renderLogin = () => {
    return <Login loginError={loginError} handleLogin={handleLogin} />;
  };

  const parseCartProducts = () => {
    const newCartProducts = cartProducts.map(cartProduct => {
      const cartProductId = cartProduct.id;
      const shopProduct = shopProducts.find(shopProduct => shopProduct.id === cartProductId);
      return {
        id: shopProduct.id,
        description: shopProduct.description,
        imageUrl: shopProduct.imageUrl,
        name: shopProduct.name,
        price: shopProduct.price,
        sizes: shopProduct.sizes,
        units: cartProduct.units
      };
    });
    return newCartProducts;
  };

  const renderShop = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Profile userData={userData} handleCloseSession={handleCloseSession} />
          <div className="col2">
            <Products
              shopProducts={filterProducts()}
              filterText={filterText}
              handleFilter={handleFilter}
              incrementCartProduct={incrementCartProduct}
            />
            <Cart
              cartProducts={parseCartProducts()}
              incrementCartProduct={incrementCartProduct}
              decrementCartProduct={decrementCartProduct}
              deleteCartProduct={deleteCartProduct}
            />
          </div>
        </Route>
        <Route path="/product/:productId" component={renderDetail} />
      </Switch>
    );
  };

  const filterProducts = () => {
    return shopProducts.filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  const renderDetail = props => {
    const foundProduct = shop.getProduct(shopProducts, props.match.params.productId);
    if (foundProduct) {
      return (
        <ProductDetail
          name={foundProduct.name}
          price={foundProduct.price}
          description={foundProduct.description}
          imageUrl={foundProduct.imageUrl}
          sizes={foundProduct.sizes}
        />
      );
    } else {
      return <p>Producto no encontrado</p>;
    }
  };

  return <>{userId === '' ? renderLogin() : renderShop()}</>;
};

export default App;
