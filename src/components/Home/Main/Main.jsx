import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Main.module.scss'
import internetOne from '../../../images/icon/nub1.svg';
import internet from '../../../images/icon/internet 1.svg';
import internetBalance from '../../../images/icon/Баланс 1.svg';
import internetKabinet from '../../../images/icon/Приложение 1.svg';
import Tariffs from '../Tariffs';
import Bid from '../../Home/Bid';
import Services from '../../Home/Services';
import Request from '../Request/Request';
import Promotion from '../Promotion';
import Advantages from '../Advantages/Advantages';

const Main = ({modalActive, setModalActive}) => {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <section className={styles.connect}>
        <h1 className={styles['connect-title']}>
          {t('main.heroTitle').split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <button onClick={() => setModalActive(true)} className={styles['connect-btn']}>{t('main.connect')}</button>
      </section>
      <div className={styles.features}>
          <div className={`${styles['features-btn']} ${styles.btn1}`}>
              <img src={internetOne} alt="number_1"/>
              <div className={styles['features-number1']}>
                  <div>{t('main.operator')}</div>
                  <p>{t('main.operatorDesc')}</p>
              </div>
          </div>
          <div className={`${styles['features-btn']} ${styles.btn2}`}>
              <img src={internetKabinet} alt="personal account on the website"/>
              <div className={styles['features-number1']}>
                  <div>{t('main.manageServices')}</div>
                  <p>{t('main.manageServicesDesc')}</p>
              </div>
          </div>
          <div className={`${styles['features-btn']} ${styles.btn3}`}>
              <img src={internet} alt="internet"/>
              <div className={styles['features-number1']}>
                  <div>{t('main.internet')}</div>
                  <p>{t('main.topUp')}</p>
              </div>
          </div>
          <div className={`${styles['features-btn']} ${styles.btn4}`}>
              <img src={internetBalance} alt="check balance"/>
              <div className={styles['features-number1']}>
                  <div>{t('main.topUp')}</div>
                  <p>{t('main.topUpDesc')}</p>
              </div>
          </div>
      </div>
      <Tariffs modalActive={modalActive} setModalActive={setModalActive} />
      <Bid  modalActive={modalActive} setModalActive={setModalActive} />
      <Services  modalActive={modalActive} setModalActive={setModalActive}/>
      <Request/>
      <Promotion/>
      <Advantages/>
    </main>
  )
}

export default Main
