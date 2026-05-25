import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './bid.module.scss'
import earth from '../../../images/3d-representation-reselling-market-Photoroom 1.svg'
import arrow from '../../../images/icon/image 3.svg'

const Bid = ({modalActive, setModalActive}) => {
  const { t } = useTranslation();
  return (
    <section className={styles.bid}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                    <div className={styles.title}>{t('bid.title')}</div>
                    <div className={styles.text}>{t('bid.text')}</div>
                    <button onClick={() => setModalActive(true)} className={styles.btn}>{t('bid.apply')}</button>
            </div>
            <div className={styles.connect}>
            <img className={styles.earth} src={earth} alt="earth" />
            <div className={styles.connect__card}>
              <h3 className={styles.connect__title}>{t('bid.becomeSubscriber')}</h3>
              <button className={styles.connect__relocate}>
                <div>{t('bid.transfer')}</div>
                <p>{t('bid.transferDesc')}</p>
                <img className={styles.arrow} src={arrow} alt="" />
              </button>
              <button onClick={() => setModalActive(true)} className={styles.connect__promotion}>
                <div>{t('bid.connectPromo')}</div>
                <p>{t('bid.connectPromoDesc')}</p>
                <img className={styles.arrow} src={arrow} alt="" />
              </button>
            </div>  
        </div>
        </div>
    </section>
  )
}

export default Bid
