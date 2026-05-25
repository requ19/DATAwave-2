import React from 'react'
import styles from './Promotions.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import { Link } from 'react-router-dom'
import post1 from '../../images/PromotionsCompon/1.svg'
import post2 from '../../images/PromotionsCompon/2.svg'
import post3 from '../../images/PromotionsCompon/3.svg'
import post4 from '../../images/PromotionsCompon/4.svg'
import calen from '../../images/PromotionsCompon/cal.svg'

const Promotions = () => {

    const promotions = [
        {
          id: 1,
          title: "Роутер по скидке -50%",
          description: "Для всех абонентов",
          validUntil: "До 07 мая 2025",
          image: post1,
          link: "/discounts"
        },
        {
          id: 2,
          title: "Сезонные скидки",
          description: "Для всех абонентов",
          validUntil: "С 31 января 2024",
          image: post2,
          link: "/season"
        },
        {
          id: 3,
          title: "Месяц интернета в подарок",
          description: "Для новых абонентов",
          validUntil: "С 31 января 2024",
          image: post3,
          link: "/gift"
        },
        {
          id: 4,
          title: "ТВ - приставка БЕСПЛАТНО!",
          description: "Для всех абонентов",
          validUntil: "До 07 мая 2025",
          image: post4,
          link: "/tvbox"
        }
      ];
  return (
    <>
      <Header/>
      <Subheader customStyle={styles.gray}/>
        <main>
            <div className={styles.promotions}>
                <div className={styles.container}>
                    <h2 className={styles.promotions__title}>Акции</h2>
                    <div className={styles.promotions__wrapper}>
                        {promotions.map((el, id) => (
                            <div key={id} className={styles.promotions__card}>
                                <img src={el.image} alt="" />
                                <h3 className={styles.promotions__card_title}>{el.title}</h3>
                                <div className={styles.promotions__card_desc}>{el.description}</div>
                                <div className={styles.promotions__card_more}>
                                    <div className={styles.promotions__card_calendar}>
                                        <img src={calen} alt="" />
                                        <p>{el.validUntil}</p>
                                    </div>
                                    <Link to={el.link} className={styles.promotions__card_btn}>Подробнее</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default Promotions
