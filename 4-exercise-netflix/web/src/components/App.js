import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Header from './Header';
import AllMovies from './AllMovies';
import MyMovies from './MyMovies';
import Login from './Login';
import Profile from './Profile';
import SignUp from './SignUp';
// services
import apiMovies from '../services/api-movies';
import apiUser from '../services/api-user';
import router from '../services/router';

const App = () => {
  // state: user
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userMovies, setUserMovies] = useState([]);
  // state: login
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  // state: sign up
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('');
  // state: movies
  const [appMovies, setAppMovies] = useState([]);
  const [allMoviesOptionGender, setAllMoviesOptionGender] = useState('');
  const [allMoviesOptionSort, setAllMoviesOptionSort] = useState('asc');

  /*
  useEffect: get movies
  Con este effect pedimos las películas al servidor.
  Se ejecuta cuando allMoviesOptionGender o allMoviesOptionSort cambian de valor.
  */
  useEffect(() => {
    const params = {
      gender: allMoviesOptionGender,
      sort: allMoviesOptionSort
    };
    apiMovies.getMoviesFromApi(params).then(response => {
      setAppMovies(response.movies);
    });
  }, [allMoviesOptionGender, allMoviesOptionSort]);

  useEffect(() => {
    if (userId !== '') {
      apiUser.getProfileFromApi(userId).then(response => {
        setUserName(response.name);
        setUserEmail(response.email);
        setUserPassword(response.password);
      });
      apiUser.getUserMoviesFromApi(userId).then(response => {
        setUserMovies(response.movies);
      });
    }
  }, [userId]);

  // events

  const sendLoginToApi = data => {
    apiUser.sendLoginToApi(data).then(response => {
      if (response.success === true) {
        setUserId(response.userId);
        setLoginErrorMessage('');
        router.redirect('/');
      } else {
        setLoginErrorMessage(response.errorMessage);
      }
    });
  };

  const sendSingUpToApi = data => {
    apiUser.sendSingUpToApi(data).then(response => {
      if (response.success === true) {
        setUserId(response.userId);
        setSignUpErrorMessage('');
        router.redirect('/');
      } else {
        setSignUpErrorMessage(response.errorMessage);
      }
    });
  };

  const sendProfileToApi = data => {
    apiUser.sendProfileToApi(data);
  };

  const logout = () => {
    router.redirect('/');
    router.reload();
  };

  const handleAllMoviesOptions = data => {
    if (data.key === 'gender') {
      setAllMoviesOptionGender(data.value);
    } else if (data.key === 'sort') {
      setAllMoviesOptionSort(data.value);
    }
  };

  return (
    <>
      <Header isUserLogged={!!userId} logout={logout} />
      <Switch>
        <Route exact path="/">
          <AllMovies
            movies={appMovies}
            allMoviesOptionGender={allMoviesOptionGender}
            allMoviesOptionSort={allMoviesOptionSort}
            handleAllMoviesOptions={handleAllMoviesOptions}
          />
        </Route>
        <Route path="/my-movies">
          <MyMovies movies={userMovies} />
        </Route>
        <Route path="/login">
          <Login loginErrorMessage={loginErrorMessage} sendLoginToApi={sendLoginToApi} />
        </Route>
        <Route path="/signup">
          <SignUp signUpErrorMessage={signUpErrorMessage} sendSingUpToApi={sendSingUpToApi} />
        </Route>
        <Route path="/profile">
          <Profile
            userName={userName}
            userEmail={userEmail}
            userPassword={userPassword}
            sendProfileToApi={sendProfileToApi}
          />
        </Route>
      </Switch>
    </>
  );
};

export default App;
