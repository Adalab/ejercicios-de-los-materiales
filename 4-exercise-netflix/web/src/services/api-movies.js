// login

const getMoviesFromApi = params => {
  console.log('Se están las películas de la app');
  return fetch(`//localhost:4000/movies?sort=${params.sort}&gender=${params.gender}`)
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
