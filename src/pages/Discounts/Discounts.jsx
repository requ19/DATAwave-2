import React from 'react'
import styles from './Discounts.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import cal from '../../images/Gift/Main/cal.svg'
import PromoBlock from '../../components/Discounts/Promo'
import { Link } from 'react-router-dom';
const Discounts = () => {
  return (
    <>
      <Header/>
      <Subheader customStyle={styles.gray}/>
      <main>
          <div className={styles.gift}>
              <div className={styles.container}>
                  <div className={styles.gift__card}>
                      <h2 className={styles.gift__title}>РОУТЕР ПО СКИДКЕ</h2>
                      <div className={styles.gift__desc}>Для всех абонентов: при подключении интернета или замене  
                      вы получите скидку 50% на покупку роутера!</div>
                      <div className={styles.gift__date}>
                        <img src={cal} alt="" />
                        <p>С 31 января 2024 по 02 сентября 2025 года</p>
                      </div>
                      <Link to='/tariffs#equipment'><button className={styles.gift__btn}>Оборудование</button></Link>
                  </div>
              </div>
          </div>
          <PromoBlock/>
      </main>
      <Footer/>
    </>
  )
}

export default Discounts
