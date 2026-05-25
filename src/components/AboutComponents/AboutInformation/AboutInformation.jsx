import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutInformation.module.scss';
import companyPost_1 from '../../../images/AboutCompon/AboutInformation/1.svg';
import companyPost_2 from '../../../images/AboutCompon/AboutInformation/2.svg';
import companyPost_3 from '../../../images/AboutCompon/AboutInformation/3.svg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const AboutInformation = () => {
    const { t } = useTranslation();
    const [heightRatio, setHeightRatio] = useState(window.innerWidth <= 1240 ? 0.5 : 0.3);

    useEffect(() => {
        const updateHeightRatio = () => {
            setHeightRatio(window.innerWidth <= 1240 ? 0.5 : 0.3);
        };
        window.addEventListener('resize', updateHeightRatio);
        return () => window.removeEventListener('resize', updateHeightRatio);
    }, []);

    return (
        <section className={styles.aboutinformation}>
            <div className={styles.container}>
                <Splide
                    options={{
                        arrows: false,
                        paginationDirection: 'ttb',
                        classes: {
                            pagination: 'splide__pagination',
                            page: 'splide__pagination__page',
                        },
                        direction: 'ttb',
                        heightRatio: heightRatio,
                        wheel: true,
                    }}
                >
                    {[companyPost_1, companyPost_2, companyPost_3].map((img, index) => (
                        <SplideSlide key={index}>
                            <div className={styles.aboutinformation__wrapper}>
                                <div className={styles.aboutinformation__img}>
                                    <img src={img} alt={`${t('about.slideAlt')} ${index + 1}`} />
                                </div>
                                <div className={styles.aboutinformation__info}>
                                    <h3 className={styles.aboutinformation__info_title}>{t('about.companyTitle')}</h3>
                                    <p className={styles.aboutinformation__info_desc}>{t('about.companyDesc')}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>

                <div className={styles.aboutinformation__mission_wrapper}>
                    <h3 className={styles.aboutinformation__mission_title}>{t('about.missionTitle')}</h3>
                    <p className={styles.aboutinformation__mission_desc}>{t('about.missionDesc')}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutInformation;
