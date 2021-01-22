import React from 'react';
import Button from '../components/Button';

const Item = props => {
  // events
  const handleIncrementCartProduct = () => {
    props.incrementCartProduct(props.id);
  };

  const handleDecrementCartProduct = () => {
    props.decrementCartProduct(props.id);
  };

  const handleDeleteCartProduct = () => {
    props.deleteCartProduct(props.id);
  };

  // render
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price} €</td>
      <td>
        <Button
          text="-"
          title="Quitar una unidad más de este producto"
          handleClick={handleDecrementCartProduct}
        />
        {props.units}
        <Button
          text="+"
          title="Añadir una unidad más de este producto"
          handleClick={handleIncrementCartProduct}
        />
        <Button
          cssClass="fas fa-trash"
          title="Eliminar este producto de la cesta"
          handleClick={handleDeleteCartProduct}
        />
      </td>
      <td className="text-align-right">{props.price * props.units} €</td>
    </tr>
  );
};

export default Item;
