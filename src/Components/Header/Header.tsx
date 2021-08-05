import React from "react";
import Logotype from "../../assets/images/gokyivlogo.png";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div className="container">
      <div className={styles.headerWrapper}>
        <img
          className={styles.logotype}
          src={Logotype}
          alt="Логотип сайта"
          width="200"
        />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
