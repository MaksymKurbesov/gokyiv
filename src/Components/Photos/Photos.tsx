import React from "react";
import styles from "./Photos.module.css";
import NechtoPhotoset from "../../assets/images/nechtoPhotoset.jpg";
import VeselkaPhotoset from "../../assets/images/veselkaPhotoset.jpg";

const Photos = () => {
  return (
    <div className={styles.photosets}>
      <h3 className={styles.title}>Фото-сети</h3>
      <ul>
        <li>
          <img
            src={NechtoPhotoset}
            alt="Обкладинка фото-сету"
            width="100%"
            height={400}
          />
          <p className={styles.photosetInfo}>
            NECHTO x СЕТАП <br /> <span>15.05.2021</span>
          </p>
        </li>
        <li>
          <img
            src={VeselkaPhotoset}
            alt="Обкладинка фото-сету"
            width="100%"
            height={400}
          />
          <p className={styles.photosetInfo}>
            VESELKA <br /> <span>04.06.2021</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Photos;
