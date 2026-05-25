import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Subheader.module.scss'
import { Link } from 'react-router-dom'

const Subheader = ({customStyle}) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.subheader} ${customStyle}`}>
      <Link to='/'><div className={styles.logo}>DATAWAVE</div></Link>
      <ul className={styles['subheader-services']}> 
        <Link to='/tariffs'><li>{t('subheader.tariffs')}</li></Link>
        <Link to='/payment'><li>{t('subheader.payment')}</li></Link>
        <Link to='/promotions'><li>{t('subheader.promotions')}</li></Link>
        <Link to='/cinema'><li>{t('subheader.cinema')}</li></Link>
      </ul>
      <a className={styles.email} href="mailto:support@sm.kg">support@sm.kg</a>
      <a className={styles.tel} href="tel:+996707680404">0707 68 04 04</a>
      <div className={styles['subheader-mobile']}>
          <a className={styles['tel-mobile']} href="tel:+996707680404">0707 68 04 04</a>
          <a className={styles['connect-mobile']} href="/connect">{t('subheader.connect')}</a>
      </div>
    </div>
  )
}

export default Subheader
