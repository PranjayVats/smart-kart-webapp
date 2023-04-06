import React from "react";
import Img404 from "../../../assets/images/404.webp";
import styles from "./Error404.module.css";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <div className={styles.error404}>
      <div className={styles.errorDetails}>
        <h1>Oops! It's Error404</h1>
        <p>
          Look like you're lost. The page you are looking for is either not
          available or doesn't exist!
        </p>
        <NavLink to="/">Back to Home</NavLink>
      </div>
      <img src={Img404} alt="Error404" loading="lazy" />
    </div>
  );
}

export default Error404;
