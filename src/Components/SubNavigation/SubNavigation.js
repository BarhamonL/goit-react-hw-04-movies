import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import routes from "../../routes";
import styles from "./SubNavigation.module.css";

function SubNavigation({ id, locationToSend }) {
  return (
    <ul className={styles.subNavList}>
      <li className={styles.subNavList_item}>
        <NavLink
          to={{
            pathname: `${routes.movies}/${id}/cast`,
            state: { from: locationToSend },
          }}
          className={styles.subNavList_link}
          activeClassName={styles.subNavList_activeLink}
        >
          Cast
        </NavLink>
      </li>
      <li className={styles.subNavList_item}>
        <NavLink
          to={{
            pathname: `${routes.movies}/${id}/reviews`,
            state: { from: locationToSend },
          }}
          className={styles.subNavList_link}
          activeClassName={styles.subNavList_activeLink}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}

SubNavigation.propTypes = {
  id: PropTypes.number.isRequired,
  locationToSend: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default SubNavigation;
