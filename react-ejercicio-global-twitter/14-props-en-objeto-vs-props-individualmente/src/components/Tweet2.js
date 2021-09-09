import '../styles/components/Tweet.scss';

function Tweet2(props) {
  return (
    <li>
      <article className="tweet__wrapper">
        <img className="tweet__avatar" src={props.avatar} alt={`Avatar de ${props.user}`} />
        <div className="tweet__content">
          <p className="tweet__info">
            <span className="tweet__user">{props.user}</span>
            <span className="tweet__username">@{props.username}</span>
            <span className="tweet__date">{props.date}</span>
          </p>
          <p className="tweet__text">{props.text}</p>
          <ul className="tweet__actions">
            <li className="tweet__comments">{props.comments}</li>
            <li className="tweet__retweets">{props.retweets}</li>
            <li className="tweet__likes">{props.likes}</li>
            <li className="tweet__share">
              <span className="tweet__share--text">Compartir</span>
            </li>
          </ul>
        </div>
      </article>
    </li>
  );
}

export default Tweet2;
