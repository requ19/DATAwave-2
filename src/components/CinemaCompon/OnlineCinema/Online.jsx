import React, { useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Online.module.scss";
import imagePaths from "./imagePaths.js";

const Online = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState("start");

  const imagesMap = useMemo(() => ({
    start: [imagePaths.start, imagePaths.start_2].filter(Boolean),
    kinopoisk: [imagePaths.kinopoisk, imagePaths.kinopoisk_2].filter(Boolean),
    disney: [imagePaths.disney, imagePaths.disney_2].filter(Boolean),
    ufc: [imagePaths.ufc, imagePaths.ufc_2].filter(Boolean),
  }), []);

  return (
    <section className={styles.online}>
      <div className={styles.container}>
        <h3 className={styles.online__title}>{t('cinema.onlineTitle')}</h3>
        <div className={styles.online__btns}>
          {Object.keys(imagesMap).map((key) => (
            <button
              key={key}
              onClick={() => setIsActive(key)}
              className={`${styles.online__btn} ${isActive === key ? styles.online__btn_active : ""}`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
        <div className={styles.online__cards}>
          {imagesMap[isActive]?.map((images, idx) => (
            <div key={idx} className={styles.online__card}>
              {images && Object.values(images).map((src, index) =>
                src ? <img key={index} src={src} alt={`img-${index}`} /> : null
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Online;
