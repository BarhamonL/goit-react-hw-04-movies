import React from "react";
import PropTypes from "prop-types";
import moviesSearchApi from "../../Services/moviesSearchApi";
import styles from "./MovieInfo.module.css";

function MovieInfo({ movie }) {
  const { poster_path, title, name, popularity, overview, genres } = movie;
  return (
    <section className={styles.infoSection}>
      <img
        src={
          poster_path
            ? `${moviesSearchApi.path_tmdb}/w300${poster_path}`
            : moviesSearchApi.no_poster
        }
        alt="film poster"
      />
      <div className={styles.infoContainer}>
        <h2>{title || name}</h2>
        <p>User score {Math.round(popularity)}%</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres && genres.map(({ name }) => name).join(", ")}</p>
      </div>
    </section>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.array.isRequired,
  }),
};

export default MovieInfo;
