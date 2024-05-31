import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// components
import Header from "./Header";
import AllMovies from "./AllMovies";
import MyMovies from "./MyMovies";
import Login from "./Login";
import Profile from "./Profile";
import SignUp from "./SignUp";
// services
import apiMovies from "../services/api-movies";
import apiUser from "../services/api-user";
import router from "../services/router";

const App = () => {
  // state: user
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userMovies, setUserMovies] = useState([]);
  // state: login
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  // state: sign up
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  // state: movies
  const [appMovies, setAppMovies] = useState([]);
  const [allMoviesOptionGenre, setAllMoviesOptionGenre] = useState("");
  const [allMoviesOptionSort, setAllMoviesOptionSort] = useState("asc");

  /*
  useEffect: obtener las películas del API.
  Se ejecuta cuando allMoviesOptionGenre o allMoviesOptionSort cambian de valor.
  Como queremos que el back devuelva las películas filtradas por género y ordenadas por nombre estamos pasando a getMoviesFromApi estos dos valores.
  */
  useEffect(() => {
    const params = {
      genre: allMoviesOptionGenre,
      sort: allMoviesOptionSort,
    };
    apiMovies.getMoviesFromApi(params).then((response) => {
      setAppMovies(response.movies);
    });
  }, [allMoviesOptionGenre, allMoviesOptionSort]);

  /*
  useEffect: obtener el perfil de la usuaria.
  Se ejecuta cuando userId cambian de valor, es decir, cuando pasa de un string vacío a un strin relleno con el id de la usuaria.
  Como queremos que el back devuelva los datos de una usuaria getProfileFromApi recibe el userId.
  */
  useEffect(() => {
    if (userId !== "") {
      apiUser.getProfileFromApi(userId).then((response) => {
        setUserName(response.name);
        setUserEmail(response.email);
        setUserPassword(response.password);
      });
    }
  }, [userId]);

  /*
  useEffect: obtener las películas de la usuaria.
  Se ejecuta cuando userId cambian de valor, es decir, cuando pasa de un string vacío a un strin relleno con el id de la usuaria.
  Como queremos que el back devuelva las películas de una usuaria getUserMoviesFromApi recibe el userId.
  */
  useEffect(() => {
    if (userId !== "") {
      apiUser.getUserMoviesFromApi(userId).then((response) => {
        setUserMovies(response.movies);
      });
    }
  }, [userId]);

  /*
  Event: enviar datos del login al API.
  Con este evento enviamos los datos del login al servidor cuando la usuaria lanza el evento.
  Como queremos que el back devuelva el id de la usuaria sendLoginToApi recibe el email y la contraseña que ella haya escrito.
  */
  const getLogin = (loginData) => {
    // Limpiamos el error antes de enviar los datos al API
    setLoginErrorMessage("");
    // Enviamos los datos al API
    apiUser.sendLoginToApi(loginData).then((response) => {
      if (response.success === true) {
        setUserId(response.userId);
        // Si la usuaria introduce bien sus datos redireccionamos desde la página de login al inicio de la página
        router.redirect("/");
      } else {
        // Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
        setLoginErrorMessage(response.errorMessage);
      }
    });
  };

  /*
  Event: enviar datos del sign up (o registro) al API.
  Con este evento enviamos los datos del sign up al servidor cuando la usuaria lanza el evento.
  Como queremos que el back devuelva el id de la usuaria sendSignUpToApi recibe el email y la contraseña que ella haya escrito.
  */
  const getSignUp = (data) => {
    // Limpiamos el error antes de enviar los datos al API
    setSignUpErrorMessage("");
    // Enviamos los datos al API
    apiUser.sendSignUpToApi(data).then((response) => {
      if (response.success === true) {
        setUserId(response.userId);
        // Si la usuaria introduce bien sus datos redireccionamos desde la página de signup al inicio de la página
        router.redirect("/");
      } else {
        // Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
        setSignUpErrorMessage(response.errorMessage);
      }
    });
  };

  /*
  Event: enviar datos del profile al API.
  Con este evento enviamos los datos del profile al servidor cuando la usuaria lanza el evento.
  Le tenemos que indicar qué datos (nombre, email y contraseña) queremos enviar al API.
  También le tenemos que indicar cuál es la usuaria actual, por ello enviamos el userId
  */
  const sendProfile = (userId, data) => {
    apiUser.sendProfileToApi(userId, data).then(() => {
      // Después de enviar los datos al servidor los volvemos a pedir al servidor para tenerlos actualizados
      apiUser.getProfileFromApi(userId).then((response) => {
        setUserName(response.name);
        setUserEmail(response.email);
        setUserPassword(response.password);
      });
    });
  };

  /*
  Event: cerrar sesión.
  Redireccionamos al inicio de la página.
  Recargamos la página para que se borren todos los datos del estado de React.
  */
  const logout = () => {
    router.redirect("/");
    router.reload();
    localStorage.clear();
  };

  /*
  Event: actualizar el género y la ordenación.
  Aquí solo guardamos los datos en el estado.
  En el primer useEffect le decimos que cuando estos datos cambien vuelva a pedir las películas al API.
  */
  const handleAllMoviesOptions = (data) => {
    if (data.key === "genre") {
      setAllMoviesOptionGenre(data.value);
    } else if (data.key === "sort") {
      setAllMoviesOptionSort(data.value);
    }
  };

  // render

  return (
    <>
      {/* Le paso Header un booleano indicando si la usuaria está o no logada.
      No es necesario pasarle el userId, no necesita saberlo, le basta con saber si está logada o no.
      De esta forma Header maneja datos más simples y solo los que necesita. Queremos que Header sea lo más simple posible. */}
      <Header isUserLogged={!!userId} logout={logout} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <AllMovies
              movies={appMovies}
              allMoviesOptionGenre={allMoviesOptionGenre}
              allMoviesOptionSort={allMoviesOptionSort}
              handleAllMoviesOptions={handleAllMoviesOptions}
            />
          }
        />

        <Route path="/my-movies" element={<MyMovies movies={userMovies} />} />

        <Route
          path="/login"
          element={
            <Login loginErrorMessage={loginErrorMessage} getLogin={getLogin} />
          }
        />

        <Route
          path="/signup"
          element={
            <SignUp
              signUpErrorMessage={signUpErrorMessage}
              getSignUp={getSignUp}
            />
          }
        />

        <Route
          path="/profile"
          element={
            <Profile
              userName={userName}
              userEmail={userEmail}
              userPassword={userPassword}
              sendProfile={sendProfile}
              userId={userId}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
