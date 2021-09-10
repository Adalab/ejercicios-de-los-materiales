const HeaderMenuButton = props => {
  const handleClick = () => {
    props.handleClick();
  };

  return (
    <li className={`menu__item menu__item--${props.liClass}`}>
      <button className="menu__link" title={props.text} onClick={handleClick}>
        <span className="text">{props.text}</span>
      </button>
    </li>
  );
};

export default HeaderMenuButton;
