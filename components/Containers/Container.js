import React from "react";
import styles from "./styles.module.css";

const Container = ({ id, className, children }) => {
  return (
    <section id={id} className={`${styles.container}`}>
      {children}
    </section>
  );
};

export default Container;
