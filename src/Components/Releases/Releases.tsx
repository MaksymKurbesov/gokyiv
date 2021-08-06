import React from "react";
import styles from "./Releases.module.css";
import RhythmBuro006 from "../../assets/images/rhythmburo006vinyl.png";
import RhythmBuro007 from "../../assets/images/rhythmburo007vinyl.png";
import Nechto006 from "../../assets/images/nechto006vinyl.png";

const Releases = () => {
  return (
    <div className="container">
      <h3 className={styles.title}>Релізи</h3>
      <ul className={styles.releasesList}>
        <li>
          <img src={RhythmBuro007} width={500} alt="Обкладинка релізу" />
          <p>Various Artists - [ Rhythm Büro 007 ]</p>
        </li>
        <li>
          <img src={Nechto006} width={500} alt="Обкладинка релізу" />
          <p>Scary Beautiful LP #1 [ NECH006 ]</p>
        </li>
        <li>
          <img src={RhythmBuro006} width={500} alt="Обкладинка релізу" />
          <p>Zadig - Takara-machi EP [ Rhythm Büro 006 ]</p>
        </li>
      </ul>
    </div>
  );
};

export default Releases;
