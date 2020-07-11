import React from "react";
import styles from "./Section.module.css";
import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <h4 className={styles.title}>{title}</h4>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
