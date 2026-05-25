import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Services.module.scss'
import wallet from '../../../images/PaymentCompon/Моб кошельки.svg'
import apps from '../../../images/PaymentCompon/apps.svg'
import terminal from '../../../images/PaymentCompon/Терминалы.svg'

const Services = () => {
    const { t } = useTranslation();
    const servicesItem = [
        {img: wallet, title: t('payment.wallet')},
        {img: apps, title: t('payment.banking')},
        {img: terminal, title: t('payment.terminal')},
    ]
  return (
    <section className={styles.services}>
        <div className={styles.container}>
            <h2 className={styles.services__title}>{t('payment.title')}</h2>
            <div className={styles.services__wrapper}>
                {servicesItem.map((el, index) => (
                    <div key={index} className={styles.services__card}>
                        <h2>{el.title}</h2>
                        <img src={el.img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services
