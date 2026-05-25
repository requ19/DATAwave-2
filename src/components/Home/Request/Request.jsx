import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Request.module.scss'

const Request = ({customStyle}) => {
  const { t } = useTranslation();
  return (
    <section className={`${styles.request} ${customStyle}`}>
        <div className={styles.container}>
            <div className={styles.request__wrapper}>
                <h2 className={styles.request__title}>{t('request.title')}</h2>
                <form className={styles.request__form}>
                    <input className={styles.request__fio} placeholder={t('request.fullName')} type="text" />
                    <input className={styles.request__tel} placeholder={t('request.phone')} type="text" />
                    <div className={styles.request__adress_wrapper}>
                        <input className={styles.request__adress} placeholder={t('request.address')} type="text" />
                        <input className={styles.request__email} placeholder={t('request.email')} type="text" />
                    </div>
                    <input className={styles.request__tariff} placeholder={t('request.tariff')} type="text" />
                    <div className={styles.request__btn_wrapper}>
                        <input className={styles.request__chekbox} type="checkbox" />
                        <p className={styles.request__chekbox_text}>{t('request.consent')}</p>
                        <button className={styles.request__btn}>{t('request.submit')}</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Request
