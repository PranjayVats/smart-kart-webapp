import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import LinkedIn from "../../../assets/images/linkedin.webp";
import Github from "../../../assets/images/githubLink.webp";
import Gmail from "../../../assets/images/gmail.webp";
function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.leftFooter}>
        <figure>
          <img src={Logo} alt="" />
          <figcaption>
            <h2>SMART-KART</h2>
            <p>A SMART & SECURE WAY OF E-SHOPPING</p>
            <p>Copyright 2023 &copy; ZealousCoders</p>
          </figcaption>
        </figure>
      </div>
      <div className={styles.rightFooter}>
        <div className={styles.usefulLinks}>
          <h3>Useful Links</h3>
          <Link to="/about">About</Link>
          <Link to="">Contact</Link>
        </div>
        <div className={styles.connectWithUs}>
          <h3>Connect With Us</h3>
          <Link to="https://mail.google.com/mail/u/0/?to=pranjayvats22062001@gmail.com&fs=1&tf=cm/">
            <img src={Gmail} alt="" />
          </Link>
          <Link to="https://www.linkedin.com/in/pranjay-vats-4bb250205/">
            <img src={LinkedIn} alt="" />
          </Link>
          <Link to="https://github.com/PranjayVats">
            <img src={Github} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
