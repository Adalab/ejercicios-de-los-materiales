import React, { useState } from 'react';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // events

  const handleEmail = ev => {
    setEmail(ev.target.value);
  };

  const handlePassword = ev => {
    setPassword(ev.target.value);
  };

  const handleForm = ev => {
    ev.preventDefault();
    // enviamos los datos a App y este al API
    props.sendLoginToApi({
      email: email,
      password: password
    });
  };

  // render

  const renderErrorMessage = () => {
    // Si el API ha devuelto un error, App lo guarda en su estado y nos lo pasa por props
    if (props.loginErrorMessage !== '') {
      return (
        <p className="border--medium border--warning mt-1">
          Error en el login: <span className="text--bold">{props.loginErrorMessage}</span>
        </p>
      );
    }
  };

  return (
    <section className="border--medium">
      <h1>Identifícate</h1>
      <form onSubmit={handleForm}>
        <label className="form__label display-block" htmlFor="email">
          Escribe tu email
        </label>
        <input
          className="form__input-text"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />

        <label className="form__label display-block" htmlFor="password">
          Escribe tu contraseña
        </label>
        <input
          className="form__input-text"
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <input className="form__btn display-block" type="submit" value="Entrar" />

        {renderErrorMessage()}
      </form>
    </section>
  );
};

export default Login;
