import React from "react";
import styles from "./styles.module.css";

const Wrapper = ({ children, id, className }) => {
  return (
  <div id={id} className={className}>
    {children}
  </div>)
};

export default Wrapper;
