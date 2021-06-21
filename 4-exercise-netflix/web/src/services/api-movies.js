// login

const getMoviesFromApi = () => {
  console.log('Se están pidiendo las películas de la app');
  return fetch('//beta.adalab.es/ejercicios-extra/api/fake/empty.json')
    .then(response => response.json())
    .then(() => {
      return {
        success: true,
        movies: [
          {
            id: '1',
            title: 'Gambita de dama',
            gender: 'Drama',
            image: 'https://via.placeholder.com/150'
          },
          {
            id: '2',
            title: 'Friends',
            gender: 'Comedia',
            image: 'https://via.placeholder.com/150'
          }
        ]
      };
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;
