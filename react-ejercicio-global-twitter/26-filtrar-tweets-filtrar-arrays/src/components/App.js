import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// components
import ComposeModal from './ComposeModal';
import Header from './Header';
import Home from './Home';
import Loader from './Loader';
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
  const [showLoading, setShowLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  // effects
  useEffect(() => {
    setShowLoading(true);
    getTweets().then(data => {
      setShowLoading(false);
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

  const handleSearchText = searchText => {
    setSearchText(searchText);
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

  const getFilteredTweets = () => {
    return tweets.filter(tweet => {
      return (
        tweet.text.toLowerCase().includes(searchText.toLowerCase()) ||
        tweet.user.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  // get route tweet id
  const routeTweetData = useRouteMatch('/tweet/:tweetId');

  const getRouteTweet = () => {
    if (routeTweetData) {
      const routeTweetId = routeTweetData.params.tweetId;
      return tweets.find(tweet => {
        return tweet.id === routeTweetId;
      });
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
            <Search searchText={searchText} handleSearchText={handleSearchText} />
            <Tweets tweets={getFilteredTweets()} />
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
      <Loader showLoading={showLoading} />
    </div>
  );
}

export default App;
