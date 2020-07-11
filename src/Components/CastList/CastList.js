import React from "react";
import PropTypes from "prop-types";
import moviesSearchApi from "../../Services/moviesSearchApi";
import styles from "./CastList.module.css";

function CastList({ cast }) {
  return (
    <>
      {cast.length > 0 ? (
        <ul className={styles.castList}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={styles.castList_item}>
              <img
                src={
                  profile_path
                    ? `${moviesSearchApi.path_tmdb}/w200${profile_path}`
                    : moviesSearchApi.no_image
                }
                alt="movie actor"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no information about the actors in this film</p>
      )}
    </>
  );
}

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default CastList;
