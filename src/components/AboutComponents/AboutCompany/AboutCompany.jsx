import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './AboutCompany.module.scss';
import internetOne from '../../../images/icon/nub1.svg';
import internet from '../../../images/icon/internet 1.svg';
import internetBalance from '../../../images/icon/Баланс 1.svg';
import internetKabinet from '../../../images/icon/Приложение 1.svg';

const AboutCompany = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.aboutcompany}>
            <div className={styles.aboutcompany__wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.aboutcompany__title}>{t('about.title')}</h1>
                </div>
            </div>
            <div className={styles.features}>
          <div className={`${styles['features-btn']} ${styles.btn1}`}>
              <img src={internetOne} alt="number_1"/>
              <div className={styles['features-number1']}>
                  <div>{t('about.operator')}</div>
                  <p>{t('about.operatorDesc')}</p>
              </div>
          </div>
          <div className={`${styles['features-btn']} ${styles.btn2}`}>
              <img src={internetKabinet} alt="personal account"/>
              <div className={styles['features-number1']}>
                  <div>{t('about.cabinet')}</div>
                  <p>{t('about.cabinetDesc')}</p>
              </div>
          </div>
          <div className={`${styles['features-btn']} ${styles.btn3}`}>
              <img src={internet} alt="internet"/>
              <div className={styles['features-number1']}>
                  <div>{t('about.internet')}</div>
                  <p>{t('about.internetDesc')}</p>
              </div>
          </div>
          <div className={`${styles['features-btn']} ${styles.btn4}`}>
              <img src={internetBalance} alt="check balance"/>
              <div className={styles['features-number1']}>
                  <div>{t('about.topUp')}</div>
                  <p>{t('about.topUpDesc')}</p>
              </div>
          </div>
            </div>
    </section>
  )
}

export default AboutCompany
