import '../styles/components/Tweet.scss';

function Tweet(props) {
  return (
    <li>
      <article className="tweet__wrapper">
        <img
          className="tweet__avatar"
          src={props.tweet.avatar}
          alt={`Avatar de ${props.tweet.user}`}
        />
        <div className="tweet__content">
          <p className="tweet__info">
            <span className="tweet__user">{props.tweet.user}</span>
            <span className="tweet__username">@{props.tweet.username}</span>
            <span className="tweet__date">{props.tweet.date}</span>
          </p>
          <p className="tweet__text">{props.tweet.text}</p>
          <ul className="tweet__actions">
            <li className="tweet__comments">{props.tweet.comments}</li>
            <li className="tweet__retweets">{props.tweet.retweets}</li>
            <li className="tweet__likes">{props.tweet.likes}</li>
            <li className="tweet__share">
              <span className="tweet__share--text">Compartir</span>
            </li>
          </ul>
        </div>
      </article>
    </li>
  );
}

export default Tweet;
