import PropTypes from "prop-types";

const MoviesList = ({ movies }) => {
  const renderMovieList = () => {
    return <ul className="cards">{renderMovies()}</ul>;
  };

  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <li key={movie.id} className="card">
          <img
            className="card__img"
            src={movie.image}
            alt={`Carátula de ${movie.title}`}
          />
          <h3 className="card__title">{movie.title}</h3>
          <p className="card__description">Género: {movie.genre}</p>
        </li>
      );
    });
  };

  const renderEmptyList = () => {
    return <p>No hay películas en este listado</p>;
  };

  return movies.length ? renderMovieList() : renderEmptyList();
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
