import React from "react";
import styles from "./Previews.module.css";
import BraveFactoryHero from "../../assets/images/bravefactoryhero.jpg";
import Slider from "./Slider";

const Previews = () => {
  return (
    <div className={styles.previewsWrapper}>
      <Slider />
    </div>
  );
};

export default Previews;
