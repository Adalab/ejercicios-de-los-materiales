import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// components
import ComposeModal from './ComposeModal';
import Header from './Header';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Tweets from './Tweets';
import TweetDetail from './TweetDetail';
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

  const routeTweetData = useRouteMatch('/tweet/:tweetId');

  const getRouteTweet = () => {
    if (routeTweetData) {
      const routeTweetId = routeTweetData.params.tweetId;
      const routeTweet = tweets.find(tweet => {
        return tweet.id === routeTweetId;
      });
      return routeTweet || {};
    }
  };

  return (
    <div className="page">
      <Header handleToggleCompose={handleToggleCompose} />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Home />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/search">
            <Search />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/profile">
            <Profile />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/tweet/:tweetId">
            <TweetDetail tweet={getRouteTweet()} />
          </Route>
        </Switch>

        {renderComposeModal()}
      </main>
    </div>
  );
}

export default App;
