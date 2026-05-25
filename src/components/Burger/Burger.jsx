import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './burger.module.scss';

const Burger = ({ isOpen }) => {
  const { t, i18n } = useTranslation();

  const menu = [
    { value: t('nav.privateClients'), href: '/client' },
    { value: t('nav.equipment'), href: '/tariffs#equipment' },
    { value: t('nav.support'), href: 'https://wa.me/+996557065019' },
    { value: t('nav.about'), href: '/about' },
    { value: t('nav.balanceCheck'), href: '/check' },
    { value: t('nav.tariffs'), href: '/tariffs' },
    { value: t('nav.payment'), href: '/payment' },
    { value: t('nav.promotions'), href: '/promotions' },
    { value: t('nav.cinema'), href: '/cinema' },
  ];

  return (
    <div className={`${styles['burger-menu']} ${isOpen ? styles.open : ''}`}>
      <div className={styles.lung}>
        <button
          className={i18n.language === 'kg' ? styles.activeLang : ''}
          onClick={() => i18n.changeLanguage('kg')}
        >
          {t('lang.kg')}
        </button>
        <button
          className={i18n.language === 'ru' ? styles.activeLang : ''}
          onClick={() => i18n.changeLanguage('ru')}
        >
          {t('lang.ru')}
        </button>
        <button
          className={i18n.language === 'en' ? styles.activeLang : ''}
          onClick={() => i18n.changeLanguage('en')}
        >
          {t('lang.en')}
        </button>
      </div>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Burger;
