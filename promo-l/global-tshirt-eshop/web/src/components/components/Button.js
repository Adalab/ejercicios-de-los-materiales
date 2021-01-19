import React from 'react';

const Button = props => {
  const handleClick = () => {
    props.handleClick();
  };
  return (
    <button className={'card__btn ' + props.cssClass} title={props.title} onClick={handleClick}>
      {props.text || ''}
    </button>
  );
};

export default Button;
