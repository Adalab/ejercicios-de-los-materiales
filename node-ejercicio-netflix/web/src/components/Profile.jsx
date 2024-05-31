import PropTypes from "prop-types";
import { useState } from "react";

const Profile = ({
  sendProfile,
  userName,
  userEmail,
  userPassword,
  userId,
}) => {
  const [name, setName] = useState(userName || "");
  const [email, setEmail] = useState(userEmail || "");
  const [password, setPassword] = useState(userPassword || "");

  // events

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    // enviamos los datos a App y este al API
    sendProfile(userId, {
      name: name,
      email: email,
      password: password,
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

        <input
          className="form__btn display-block"
          type="submit"
          value="Guardar"
        />
      </form>
    </section>
  );
};

Profile.propTypes = {
  sendProfile: PropTypes.func.isRequired,
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  userPassword: PropTypes.string,
  userId: PropTypes.string,
};

export default Profile;
