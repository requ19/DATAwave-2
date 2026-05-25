import React from 'react'
import styles from './Gift.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import cal from '../../images/Gift/Main/cal.svg'
import PromoBlock from '../../components/Gift/Promo/PromoBlock'
import { Link } from 'react-router-dom';
const Gift = () => {
  return (
    <>
      <Header/>
      <Subheader customStyle={styles.gray}/>
      <main>
          <div className={styles.gift}>
              <div className={styles.container}>
                  <div className={styles.gift__card}>
                      <h2 className={styles.gift__title}>МЕСЯЦ В ПОДАРОК</h2>
                      <div className={styles.gift__desc}>При подключение интернета вы получите 
                      скидку 100% на абонентскую поату на 1 месяц</div>
                      <div className={styles.gift__date}>
                        <img src={cal} alt="" />
                        <p>С 31 января 2024 по 19 мая 2025 года</p>
                      </div>
                      <Link to='/tariffs'><button className={styles.gift__btn}>Выбрать тариф</button></Link>
                  </div>
              </div>
          </div>
          <PromoBlock/>
      </main>
      <Footer/>
    </>
  )
}

export default Gift
