import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.scss'
import router from '../../../images/Home/Advantages/router.png'
import inet from '../../../images/Home/Advantages/inet.png'
import supp from '../../../images/Home/Advantages/supp.png'
import calendar from '../../../images/Home/Advantages/calendar.png'
import pause from '../../../images/Home/Advantages/pause.png'
import loca from '../../../images/Home/Advantages/loca.png'

const Advantages = ({customStyle}) => {
    const { t } = useTranslation();
    const advantagesItem = [
        {img: router, description: t('advantages.equipment')},
        {img: inet, description: t('advantages.connection')},
        {img: supp, description: t('advantages.support')},
        {img: calendar, description: t('advantages.payment')},
        {img: pause, description: t('advantages.pause')},
        {img: loca, description: t('advantages.office')},
    ]
  return (
    <section className={styles.advantages}>
        <div className={styles.container}>
            <h2 className={`${styles.advantages__title} ${customStyle}`}>{t('advantages.title')}</h2>
            <div className={styles.advantages__wrapper}>
                {advantagesItem.map((el, index) => (
                    <div key={index} className={styles.advantages__card}>
                        <img src={el.img} alt="" />
                        <div>{el.description}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Advantages
