import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ isUserLogged, logout }) => {
  const renderUnloggedUserLinks = () => {
    if (isUserLogged === false)
      return (
        <>
          <li className="nav__item">
            <Link className="nav__link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/signup">
              Registro
            </Link>
          </li>
        </>
      );
  };

  const renderLoggedUserLinks = () => {
    if (isUserLogged === true)
      return (
        <>
          <li className="nav__item">
            <Link className="nav__link" to="/profile">
              Mi perfil
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/my-movies">
              Mis películas
            </Link>
          </li>
          <li className="nav__item">
            <span className="nav__link" onClick={logout}>
              Cerrar sesión
            </span>
          </li>
        </>
      );
  };

  return (
    <header className="col2 border--medium">
      <Link className="nav__link" to="/">
        <h1 className="title--big">Netflix</h1>
      </Link>
      <nav className="text-align-right">
        <ul>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              Inicio
            </Link>
          </li>
          {renderUnloggedUserLinks()}
          {renderLoggedUserLinks()}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isUserLogged: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

export default Header;
