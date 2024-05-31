import PropTypes from "prop-types";
import MoviesList from "./MoviesList";

const MyMovies = ({ movies }) => {
  return (
    <section className="border--medium">
      <h1 className="title--medium">Estas son todas tus películas</h1>
      <MoviesList movies={movies} />
    </section>
  );
};

MyMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MyMovies;
