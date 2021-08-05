import React from "react";
import BraveFactoryHero from "../../assets/images/bravefactoryhero.jpg";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <div>
        <h2>Brave! Factory Festival 2021</h2>
        <span className={styles.date}>21 - 23 серпня </span>
        <a className={styles.buyTicketButton}>Купити квиток</a>
      </div>
      <img
        src={BraveFactoryHero}
        alt="Головне зображення вечірки"
        width={500}
      />
    </div>
  );
};

export default Slider;
