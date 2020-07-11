import React from "react";
import PropTypes from "prop-types";
import styles from "./Reviews.module.css";

function Reviews({ reviews }) {
  return (
    <>
      {reviews.results.length > 0 ? (
        <ul className={styles.reviewsList}>
          {reviews.results.map(({ id, author, content }) => (
            <li key={id} className={styles.reviewsList_item}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews for this movie</p>
      )}
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default Reviews;
