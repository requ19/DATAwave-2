import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Connect.module.scss'

const Connect = ({modalActive, setModalActive}) => {
  const { t } = useTranslation();
  return (
    <section className={styles.connect}>
        <div className={styles.container}>
            <div className={styles.connect__wrapper}>
                <h1 className={styles.connect__title}>{t('cinema.title')}</h1>
                <p className={styles.connect__desc}>{t('cinema.desc')}</p>
                <button onClick={() => setModalActive(true)} className={styles.connect__btn}>{t('cinema.connectBtn')}</button>
            </div>
        </div>
    </section>
  )
}

export default Connect;
