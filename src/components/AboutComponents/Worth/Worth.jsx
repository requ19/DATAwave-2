import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Worth.module.scss'
import inet from '../../../images/AboutCompon/Worth/inet.svg'
import cloud from '../../../images/AboutCompon/Worth/cloud.svg'
import supp from '../../../images/AboutCompon/Worth/supp.svg'

const Worth = () => {
  const { t } = useTranslation();
  const worthItem = [
    {img: inet, desc: t('about.value1')},
    {img: cloud, desc: t('about.value2')},
    {img: supp, desc: t('about.value3')},
  ]
  return (
    <section className={styles.worth}>
        <div className={styles.container}>
            <h2 className={styles.worth__title}>{t('about.valuesTitle')}</h2>
            <div className={styles.worth__subtitle}>{t('about.valuesSubtitle')}</div>
            <div className={styles.worth__cards}>
                {worthItem.map((el, index) => (
                    <div key={index} className={styles.worth__card}>
                        <img src={el.img} alt="" />
                        <p>{el.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Worth
