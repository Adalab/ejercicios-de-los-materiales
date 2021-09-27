import { Link } from 'react-router-dom';
import '../styles/components/TweetDetail.scss';

const TweetDetail = props => {
  const handleBackButton = () => {
    window.history.back();
    // más info en https://developer.mozilla.org/es/docs/Web/API/History
  };

  return (
    <section className="tweet-detail">
      <header className="tweet-detail__header">
        {/* Navegar con history back */}
        <button className="tweet-detail__back-btn-" onClick={handleBackButton}>
          <span>Volver atrás</span>
        </button>
        {/* Navegar con un link normal */}
        <Link className="tweet-detail__back-btn-" to="/">
          <span>Navegar a inicio</span>
        </Link>
        <h2 className="tweet-detail__header-title">Tweet</h2>
      </header>
      <article className="tweet-detail__content">
        <p className="tweet-detail__user-info">
          <img
            className="tweet-detail__avatar"
            src={props.tweet.avatar}
            alt={`Avatar de ${props.tweet.user}`}
          />
          <span>
            <span className="tweet-detail__user">{props.tweet.user}</span>
            <span className="tweet-detail__username">@{props.tweet.username}</span>
          </span>
        </p>
        <p className="tweet-detail__text">{props.tweet.text}</p>
        <span className="tweet-detail__date">{props.tweet.date}</span>
        <ul className="tweet-detail__actions">
          <li className="tweet-detail__action">
            {props.tweet.retweets} <span className="tweet-detail__actions-text">Retweets</span>
          </li>
          <li className="tweet-detail__action">
            {props.tweet.comments} <span className="tweet-detail__actions-text">Comentarios</span>
          </li>
          <li className="tweet-detail__action">
            {props.tweet.likes} <span className="tweet-detail__actions-text">Me gusta</span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default TweetDetail;
