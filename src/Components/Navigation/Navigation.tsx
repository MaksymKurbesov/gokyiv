import React from "react";
import styles from "./Navigation.module.css";
import MemberIcon from "../../assets/icons/user.svg";

const Navigation = () => {
  return (
    <nav className={styles.navLink}>
      <ul>
        <li className={styles.headerLink}>
          <a href="#">Анонси</a>
        </li>
        <li>
          <a href="#">Вечірки</a>
        </li>
        <li>
          <a href="#">Фестивалі</a>
        </li>
        <li>
          <a href="#">Клуби</a>
        </li>
        <li>
          <a href="#">
            <img
              src={MemberIcon}
              alt="Иконка личного кабинета"
              width="30"
              height="30"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
