import React from 'react';
import Header from './Header';
import Item from './Item';
import Total from './Total';
import Title from '../components/Title';

const Cart = props => {
  const renderCartProducts = () => {
    return props.cartProducts.map(cartProduct => {
      return (
        <Item
          key={cartProduct.id}
          id={cartProduct.id}
          name={cartProduct.name}
          units={cartProduct.units}
          price={cartProduct.price}
          incrementCartProduct={props.incrementCartProduct}
          decrementCartProduct={props.decrementCartProduct}
          deleteCartProduct={props.deleteCartProduct}
        />
      );
    });
  };

  const renderTotalPrice = () => {
    return props.cartProducts.reduce((acc, cartProduct) => {
      return acc + cartProduct.units * cartProduct.price;
    }, 0);
  };

  return (
    <div>
      <Title title="Cesta de la compra" />
      <table className="table">
        <Header />
        <tbody>{renderCartProducts()}</tbody>
        <Total total={renderTotalPrice()} />
      </table>
    </div>
  );
};

export default Cart;
