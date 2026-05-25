import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Balance.module.scss'
import Subheader from './../Subheader/Subheader'
import Header from './../Header/index'
import Footer from './../Footer/index'
import bd from './../../../src/fakebd/db.json'

const Balance = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("")
  const [result, setResult] = useState(null)
  const balanceCheck = bd.accounts

  useEffect(() => {
    if (!search) { setResult(null); return }
    const res = balanceCheck.filter(item => item.accountNumber === search)
    setResult(res)
  }, [search])

  return (
    <div className={styles.balance}>
      <Header />
      <Subheader customStyle={styles.balance__custom} />
      <main>
        <div className={styles.balance__container}>
          <div className={styles.balance__flex}>
            <div className={styles.balance__info}>
            {result === null ? (
              <h2>{t('balance.enter')}</h2>
            ) : result.length > 0 ? (
              <>
                <h2>{t('balance.result')}</h2>
                <p>{result[0].amount} KGS</p>
              </>
            ) : (
              <h2>{t('balance.notFound')}</h2>
            )}
          </div>
            <input
              placeholder={t('balance.placeholder')}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Balance
