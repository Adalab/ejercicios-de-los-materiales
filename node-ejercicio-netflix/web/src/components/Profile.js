import React, { useState } from 'react';

const Profile = props => {
  const [name, setName] = useState(props.userName || '');
  const [email, setEmail] = useState(props.userEmail || '');
  const [password, setPassword] = useState(props.userPassword || '');

  // events

  const handleName = ev => {
    setName(ev.target.value);
  };

  const handleEmail = ev => {
    setEmail(ev.target.value);
  };

  const handlePassword = ev => {
    setPassword(ev.target.value);
  };

  const handleForm = ev => {
    ev.preventDefault();
    // enviamos los datos a App y este al API
    props.sendProfileToApi({
      name: name,
      email: email,
      password: password
    });
  };

  // render

  return (
    <section className="border--medium">
      <h1>Mi perfil</h1>
      <form onSubmit={handleForm}>
        <label className="form__label display-block" htmlFor="name">
          Mi nombre
        </label>
        <input
          className="form__input-text"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />

        <label className="form__label display-block" htmlFor="email">
          Mi email
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
          Mi contraseña
        </label>
        <input
          className="form__input-text"
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <input className="form__btn display-block" type="submit" value="Guardar" />
      </form>
    </section>
  );
};

export default Profile;
