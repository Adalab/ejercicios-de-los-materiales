import { NavLink } from 'react-router-dom';

import '../styles/components/HeaderMenuItem.scss';

const HeaderMenuItem = props => {
  return (
    <li className={`menu__item menu__item--${props.liClass}`}>
      <NavLink className="menu__link" to={props.href} title={props.text} exact>
        <span className="text">{props.text}</span>
      </NavLink>
    </li>
  );
};

export default HeaderMenuItem;
