import React from "react";
import Navigation from "../../Navigation";
import styles from "./Appbar.module.css";

function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export default Appbar;
