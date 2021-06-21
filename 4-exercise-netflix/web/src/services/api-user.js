// login

const sendLoginToApi = data => {
  console.log('Se están enviando datos al login:', data);
  return fetch('//beta.adalab.es/ejercicios-extra/api/fake/empty.json')
    .then(response => response.json())
    .then(() => {
      // estos son datos fake
      // solo son válidos los emails de gmail
      if (data.email.includes('gmail')) {
        return {
          success: true,
          userId: '123'
        };
      } else {
        return {
          success: false,
          errorMessage: 'Usuario no encontrado'
        };
      }
    });
};

// signup

const sendSingUpToApi = data => {
  console.log('Se están enviando datos al signup:', data);
  return fetch('//beta.adalab.es/ejercicios-extra/api/fake/empty.json')
    .then(response => response.json())
    .then(() => {
      return {
        success: false,
        errorMessage: 'Usuario ya existente'
      };
    });
};

// profile

const sendProfileToApi = (userId, data) => {
  console.log('Se están enviando datos al profile:', userId, data);
  return fetch('//beta.adalab.es/ejercicios-extra/api/fake/empty.json');
};

const getProfileFromApi = userId => {
  console.log('Se están pidiendo datos del profile del usuario:', userId);
  return fetch('//beta.adalab.es/ejercicios-extra/api/fake/empty.json')
    .then(response => response.json())
    .then(() => {
      return {
        success: true,
        name: 'Maricarmen',
        email: 'mari@mail.com',
        password: '1234567'
      };
    });
};

// user movies

const getUserMoviesFromApi = userId => {
  console.log('Se están pidiendo datos de las películas de la usuaria:', userId);
  return fetch('//beta.adalab.es/ejercicios-extra/api/fake/empty.json')
    .then(response => response.json())
    .then(() => {
      return {
        success: true,
        movies: [
          {
            id: 1,
            title: 'Gambita de dama',
            gender: 'Drama',
            image: 'https://via.placeholder.com/150'
          }
        ]
      };
    });
};

const objToExport = {
  sendLoginToApi: sendLoginToApi,
  sendSingUpToApi: sendSingUpToApi,
  sendProfileToApi: sendProfileToApi,
  getProfileFromApi: getProfileFromApi,
  getUserMoviesFromApi: getUserMoviesFromApi
};

export default objToExport;
