import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Promotion.module.scss'
import post1 from '../../../images/Home/Promotion/post-1.png'
import post2 from '../../../images/Home/Promotion/post-2.png'
import post3 from '../../../images/Home/Promotion/post-3.png'

const Promotion = () => {
    const { t } = useTranslation();
    const promotionItem = [
        {data: t('promotion.date'), descrition: t('promotion.promo1'), img: post1},
        {data: t('promotion.date'), descrition: t('promotion.promo2'), img: post2},
        {data: t('promotion.date'), descrition: t('promotion.promo3'), img: post3},
    ]

  return (
    <section className={styles.promotion}>
        <div className={styles.container}>
            <h2 className={styles.promotion__title}>{t('promotion.title')}</h2>
            <div className={styles.promotion__wrapper}>
                {promotionItem.map((el, index) => (
                        <div key={index} className={styles.promotion__card}>
                            <img className={styles.promotion__img} src={el.img} alt="" />
                            <p className={styles.promotion__date}>{el.data}</p>
                            <div className={styles.promotion__descrition}>{el.descrition}</div>
                        </div>
                ))}
            </div>    
        </div>
    </section>
  )
}

export default Promotion
