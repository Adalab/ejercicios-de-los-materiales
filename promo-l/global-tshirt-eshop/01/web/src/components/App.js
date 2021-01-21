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
  const [loginError, setLoginError] = useState('');
  const [shopProducts, setShopProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [filterText, setFilterText] = useState('');

  // effects
  useEffect(() => {
    api.getProducts().then(data => {
      setShopProducts(data);
    });
  }, []);

  useEffect(() => {
    api.sendCart(userId, cartProducts);
  }, [userId, cartProducts]);

  // events
  const handleLogin = data => {
    api.sendLogin(data).then(data => {
      console.log(data);

      if (data.error) {
        setLoginError(data.message);
      } else {
        setLoginError('');
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
    setCartProducts([...newCartProducts]);
  };

  const decrementCartProduct = clickedProductId => {
    const newCartProducts = shop.decrementCartProduct(cartProducts, clickedProductId);
    setCartProducts([...newCartProducts]);
  };

  const deleteCartProduct = clickedProductId => {
    shop.deleteCartProduct(cartProducts, clickedProductId);
    setCartProducts([...cartProducts]);
  };

  // render

  const renderLogin = () => {
    return <Login loginError={loginError} handleLogin={handleLogin} />;
  };

  const renderShop = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Profile />
          <div className="col2">
            <Products
              shopProducts={filterProducts()}
              filterText={filterText}
              handleFilter={handleFilter}
              incrementCartProduct={incrementCartProduct}
            />
            <Cart
              cartProducts={cartProducts}
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
