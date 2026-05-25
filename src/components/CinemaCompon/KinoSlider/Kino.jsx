import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Kino.module.scss'
import post from '../../../images/CinemaCompon/KinoSlider/1.svg'
import post2 from '../../../images/CinemaCompon/KinoSlider/2.svg'
import post3 from '../../../images/CinemaCompon/KinoSlider/3.png'
import post4 from '../../../images/CinemaCompon/KinoSlider/4.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Kino = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.kino}>
        <div className={styles.container}>
                <h2 className={styles.kino__title}>{t('cinema.kinoTitle')}</h2>
              <Splide className={styles.kino__wrapper}
                options={{ gap: '30px', padding: '20px', perPage: 3, pagination: false }}
                >
                    <SplideSlide>
                    <div className={styles.kino__card}>
                        <h3 className={styles.kino__card_title}>{t('cinema.slide1Title')}</h3>
                        <div className={styles.kino__card_desc}>{t('cinema.slide1Desc')}</div>
                        <img src={post} alt="" />
                    </div>  
                    </SplideSlide>
                    <SplideSlide>
                    <div className={styles.kino__card}>
                        <h3 className={styles.kino__card_title}>{t('cinema.slide2Title')}</h3>
                        <div className={styles.kino__card_desc}>{t('cinema.slide2Desc')}</div>
                        <img src={post2} alt="" />
                    </div>  
                    </SplideSlide>
                    <SplideSlide>
                    <div className={styles.kino__card}>
                        <h3 className={styles.kino__card_title}>{t('cinema.slide3Title')}</h3>
                        <div className={styles.kino__card_desc}>{t('cinema.slide3Desc')}</div>
                        <img src={post3} alt="" />
                    </div>  
                    </SplideSlide>
                    <SplideSlide>
                    <div className={styles.kino__card}>
                        <h3 className={styles.kino__card_title}>{t('cinema.slide4Title')}</h3>
                        <div className={styles.kino__card_desc}>{t('cinema.slide4Desc')}</div>
                        <img src={post4} alt="" />
                    </div>  
                    </SplideSlide>
                </Splide>
        </div>
    </section>
  )
}

export default Kino
