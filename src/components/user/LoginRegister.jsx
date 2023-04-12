import React, { useEffect, useState } from "react";
import LoginImg from "../../assets/images/login.webp";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import Login from "./Login";
import Register from "./Register";

function LoginRegister() {
  const [tabs, setTabs] = useState("Login");
  return (
    <div className={styles.loginRegister}>
      <div className={styles.loginImgDiv}>
        <img src={LoginImg} className={styles.loginImg} loading="lazy" alt="" />
      </div>
      <div className={styles.loginRegisterBox}>
        <ul className={styles.loginRegisterTabs}>
          <li
            className={tabs === "Login" ? styles.active : styles.inactive}
            onClick={() => setTabs("Login")}
          >
            LOGIN
          </li>
          <li
            className={tabs === "Register" ? styles.active : styles.inactive}
            onClick={() => setTabs("Register")}
          >
            REGISTER
          </li>
        </ul>
        {tabs === "Login" ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default LoginRegister;
