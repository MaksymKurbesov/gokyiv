import React from "react";
import LaboratoriumPoster from "../../assets/images/laboratoriumPoster.jpg";
import KyivBasedPoster from "../../assets/images/kyivbasedPoster.png";
import NechtoPoster from "../../assets/images/nechtoPoster.jpg";
import VeselkaPoster from "../../assets/images/veselkaPoster.jpg";
import AvantagePoster from "../../assets/images/avantagePoster.jpg";
import TriplandPoster from "../../assets/images/triplandPoster.jpg";

import styles from "./LastParties.module.css";

const LastParties = () => {
  return (
    <div className={styles.lastParties}>
      <h3 className={styles.title}>Останні вечірки</h3>
      <ul className={styles.lastPartiesList}>
        <li>
          <img
            src={LaboratoriumPoster}
            alt="Постер вечірки"
            width={225}
            height={225}
            className={styles.partyPoster}
          />
        </li>
        <li>
          <img
            src={KyivBasedPoster}
            alt="Постер вечірки"
            width={225}
            height={225}
            className={styles.partyPoster}
          />
        </li>
        <li>
          <img
            src={NechtoPoster}
            alt="Постер вечірки"
            width={225}
            height={225}
            className={styles.partyPoster}
          />
        </li>
        <li>
          <img
            src={VeselkaPoster}
            alt="Постер вечірки"
            width={225}
            height={225}
            className={styles.partyPoster}
          />
        </li>
        <li>
          <img
            src={AvantagePoster}
            alt="Постер вечірки"
            width={225}
            height={225}
            className={styles.partyPoster}
          />
        </li>
        <li>
          <img
            src={TriplandPoster}
            alt="Постер вечірки"
            width={225}
            height={225}
            className={styles.partyPoster}
          />
        </li>
      </ul>
    </div>
  );
};

export default LastParties;
