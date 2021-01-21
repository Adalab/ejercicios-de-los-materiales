import React from 'react';

const Profile = props => {
  const handleCloseSession = ev => {
    props.handleCloseSession();
  };

  return (
    <div>
      <button className="card__btn m-0 mb-1" onClick={handleCloseSession}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
