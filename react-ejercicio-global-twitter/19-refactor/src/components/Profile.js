import adalabBanner from '../images/adalab-banner.jpg';
import adalabLogo from '../images/adalab-logo.png';
import '../styles/components/Profile.scss';

const Profile = () => {
  return (
    <section className="profile">
      <header>
        <h1 className="header__title">
          <span className="header__account">Adalab</span>
          <span className="header__tweets">6.762 Tweets</span>
        </h1>

        <img src={adalabBanner} alt="Banner de Adalab" />

        <div className="header__content">
          <div className="header__profile-image">
            <img src={adalabLogo} alt="Imagen de perfil de Adalab" />
          </div>

          <div className="header__actions">
            <button className="header__follow-btn">Siguiendo</button>
          </div>

          <div className="header__account-info">
            <span className="header__acount-title">Adalab</span>
            <span className="header__acount-username">@Adalab_Digital</span>
            <span className="header__acount-follow">Te sigue</span>
          </div>

          <h2 className="header__account-description">
            👩‍💻 Tecnóloga mujer Escuela de programación web para mujeres. <br />
            📅 Calendario espiralado Próximo curso: noviembre 2021. <br />
            📌 Clases online en directo.
            <br />
            🚀 Aprende a programar en solo 12 semanas.
          </h2>

          <div className="header__account-data">
            <span className="header__account-region">Madrid, Comunidad de Madrid</span>
            <a className="header__account-link" href="https://adalab.es">
              adalab.es
            </a>
            <span className="header__account-date">Se unió en agosto de 2016</span>
          </div>

          <div className="header__followers-info">
            <span className="header__following">
              <span className="header__followers-number">1.908</span> Siguiendo
            </span>
            <span className="header__followers">
              <span className="header__followers-number">5.601</span> Seguidores
            </span>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Profile;
