import React from "react";
import MoviesList from "./MoviesList";
import "../styles/AppMovies.scss";

const AllMovies = (props) => {
  const handleOptions = (ev) => {
    props.handleAllMoviesOptions({
      value: ev.target.value,
      key: ev.target.name,
    });
  };

  return (
    <section className="border--medium">
      <h1 className="title--medium">
        Estas son todas las películas de nuestro catálogo
      </h1>
      <form className="movies__filters">
        <div className="movies__filters--genre">
          <label htmlFor="filterGenre">Filtrar por género</label>
          <select
            className="form__input-text"
            id="filterGenre"
            name="genre"
            value={props.allMoviesOptionGenre}
            onChange={handleOptions}
          >
            <option value="">Todas</option>
            <option value="Drama">Drama</option>
            <option value="Comedia">Comedia</option>
          </select>
        </div>

        <div className="movies__filters--sort">
          <label>
            Ordernar: A-Z
            <input
              className="movies__radio"
              type="radio"
              name="sort"
              value="asc"
              checked={props.allMoviesOptionSort === "asc"}
              onChange={handleOptions}
            />
          </label>

          <label>
            Z-A
            <input
              className="movies__radio"
              type="radio"
              name="sort"
              value="desc"
              checked={props.allMoviesOptionSort === "desc"}
              onChange={handleOptions}
            />
          </label>
        </div>
      </form>

      <MoviesList movies={props.movies} />
    </section>
  );
};

export default AllMovies;
