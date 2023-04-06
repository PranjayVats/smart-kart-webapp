import React from "react";
import styles from "./Loading.module.css";
import CartLoadingImg from "../../../assets/images/cartLoadingImg2.gif";

function Loading() {
  return (
    <div className={styles.loading}>
      <img className={styles.cartLoading} src={CartLoadingImg} alt="Loading" loading="lazy" />
    </div>
  );
}

export default Loading;
