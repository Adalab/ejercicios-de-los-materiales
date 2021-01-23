import React from 'react';

const Profile = props => {
  const handleCloseSession = ev => {
    props.handleCloseSession();
  };

  return (
    <div className="profile-wrapper">
      <p className="greeting">Hola {props.userData.email}</p>
      <button className="card__btn m-0" onClick={handleCloseSession}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
