import React from 'react'
import styles from './Tvbox.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import cal from '../../images/Gift/Main/cal.svg'
import PromoBlock from '../../components/Tvbox/Promo'
const Tvbox = ({modalActive, setModalActive}) => {
  return (
    <>
      <Header/>
      <Subheader customStyle={styles.gray}/>
      <main>
          <div className={styles.gift}>
              <div className={styles.container}>
                  <div className={styles.gift__card}>
                      <h2 className={styles.gift__title}>ТВ ПРИСТАВКА БЕСПЛАТНО</h2>
                      <div className={styles.gift__desc}>Для всех абонентов: при подключении интернета или 
                      замене тарифа вы получите бесплатную ТВ-приставку!</div>
                      <div className={styles.gift__date}>
                        <img src={cal} alt="" />
                        <p>С 31 января 2024  по 11.08.2025 года</p>
                      </div>
                      <button onClick={() => setModalActive(true)} className={styles.gift__btn}>Подключить</button>
                  </div>
              </div>
          </div>
          <PromoBlock/>
      </main>
      <Footer/>
    </>
  )
}

export default Tvbox
