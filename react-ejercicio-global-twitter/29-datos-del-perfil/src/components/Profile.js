import '../styles/components/Profile.scss';

const Profile = props => {
  const parseDescription = () => {
    if (props.profile.description) {
      const descriptionWithBreakLines = props.profile.description.replace(/\n/g, '<br />');
      // Más info en https://es.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
      return { __html: descriptionWithBreakLines };
    }
  };

  return (
    <section className="profile">
      <header>
        <h1 className="header__title">
          <span className="header__account">{props.profile.user}</span>
          <span className="header__tweets">{props.profile.tweets} Tweets</span>
        </h1>

        <img src={props.profile.banner} alt={`Banner de ${props.profile.user}`} />

        <div className="header__content">
          <div className="header__profile-image">
            <img src={props.profile.logo} alt={`Imagen de perfil de ${props.profile.user}`} />
          </div>

          <div className="header__actions">
            <button className="header__follow-btn">Siguiendo</button>
          </div>

          <div className="header__account-info">
            <span className="header__acount-title">{props.profile.user}</span>
            <span className="header__acount-username">@{props.profile.username}</span>
            <span className="header__acount-follow">Te sigue</span>
          </div>

          <h2
            className="header__account-description"
            dangerouslySetInnerHTML={parseDescription()}
          />

          <div className="header__account-data">
            <span className="header__account-region">{props.profile.region}</span>
            <a className="header__account-link" href={props.profile.webLink}>
              {props.profile.webText}
            </a>
            <span className="header__account-date">Se unió en {props.profile.date}</span>
          </div>

          <div className="header__followers-info">
            <span className="header__following">
              <span className="header__followers-number">{props.profile.following}</span> Siguiendo
            </span>
            <span className="header__followers">
              <span className="header__followers-number">{props.profile.followers}</span> Seguidores
            </span>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Profile;
