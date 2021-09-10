import { useEffect, useState } from 'react';
// components
import ComposeModal from './ComposeModal';
import Header from './Header';
import MainHeader from './MainHeader';
import Tweet from './Tweet';
// services
import getTweets from '../services/api';
import ls from '../services/local-storage';
// styles
import '../styles/layout/App.scss';

function App() {
  // state
  const [composeIsOpen, setComposeIsOpen] = useState(false);
  const [composeText, setComposeText] = useState(ls.get('composeText', ''));
  const [tweets, setTweets] = useState([]);

  // effects
  useEffect(() => {
    getTweets().then(data => {
      setTweets(data);
    });
  }, []);

  useEffect(() => {
    ls.set('composeText', composeText);
  }, [composeText]);

  // events
  const handleToggleCompose = () => {
    setComposeIsOpen(!composeIsOpen);
  };

  const handleComposeText = value => {
    setComposeText(value);
  };

  const handleComposeSubmit = ev => {
    tweets.unshift({
      id: '1243sdf',
      avatar:
        '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/twitter-v1/images/user-me.jpg',
      user: 'Adalab',
      username: 'adalab_digital',
      date: '8 sep. 2021',
      text: composeText,
      comments: 0,
      retweets: 0,
      likes: 0
    });
    setTweets([...tweets]);
    setComposeIsOpen(false);
    setComposeText('');
  };

  // render helpers

  const renderTweets = () => {
    return tweets.map(tweet => {
      return <Tweet key={tweet.id} tweet={tweet} />;
    });
  };

  const renderComposeModal = () => {
    if (composeIsOpen === true) {
      return (
        <ComposeModal
          composeText={composeText}
          handleComposeText={handleComposeText}
          handleToggleCompose={handleToggleCompose}
          handleComposeSubmit={handleComposeSubmit}
        />
      );
    }
  };

  return (
    <div className="page">
      <Header handleToggleCompose={handleToggleCompose} />
      <main className="main">
        <MainHeader />
        <ul>{renderTweets()}</ul>
        {renderComposeModal()}
      </main>
    </div>
  );
}

export default App;
