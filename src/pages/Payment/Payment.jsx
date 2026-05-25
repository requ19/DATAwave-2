import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Payment.module.scss'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader'
import Header from '../../components/Header'
import Services from '../../components/PaymentCompon/ServicesCom'
import PaymentForm from '../../components/Payment/PaymentForm'

const Payment = ({ modalActive, setModalActive }) => {
  const { t } = useTranslation();
  const [showPayForm, setShowPayForm] = useState(false);

  return (
    <>
      <Header modalActive={modalActive} setModalActive={setModalActive} />
      <Subheader />
      <main>
        <div className={styles.payment_bg}></div>
        <Services />

        {/* Секция онлайн-оплаты через PayHub */}
        <section className={styles.onlinePay}>
          <div className={styles.container}>
            <h2 className={styles.onlinePay__title}>Оплата онлайн</h2>
            <p className={styles.onlinePay__desc}>
              Оплатите услуги Datawave напрямую через защищённую страницу Demirbank
            </p>

            {!showPayForm ? (
              <button
                className={styles.onlinePay__btn}
                onClick={() => setShowPayForm(true)}
              >
                Оплатить онлайн
              </button>
            ) : (
              <div className={styles.onlinePay__form}>
                <PaymentForm
                  defaultDescription="Оплата услуг Datawave"
                />
                <button
                  className={styles.onlinePay__cancel}
                  onClick={() => setShowPayForm(false)}
                >
                  Отмена
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer modalActive={modalActive} setModalActive={setModalActive} />
    </>
  )
}

export default Payment
