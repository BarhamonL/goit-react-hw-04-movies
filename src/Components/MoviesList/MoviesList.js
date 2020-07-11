import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../../routes";
import styles from "./MoviesList.module.css";

function MoviesList(props) {
  const { movies, location } = props;

  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id} className={styles.moviesList_item}>
          <Link
            to={{
              pathname: `${routes.movies}/${id}`,
              state: { from: location },
            }}
          >
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MoviesList;
