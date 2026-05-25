import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './navigation.module.scss'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../LanguageSwitcher';

const Navigation = ({modalActive, setModalActive, menu}) => {
  const { t } = useTranslation();
  return (
    <nav className={styles.menu}>
        <ul className={styles['menu-list']}>
            {menu.map((el, id) => 
              <li key={id}>
                <Link to={el.href}>{el.value}</Link>
              </li>
            )}
        </ul>
        <LanguageSwitcher />
        <button onClick={() => setModalActive(true)} className={styles['menu-connect']}>{t('nav.connect')}</button>
    </nav>
  )
}

export default Navigation
