import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import Navigation from '../Navigation';
import Burger from '../Burger';

const Header = ({modalActive, setModalActive}) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const menu = [
    { value: t('nav.equipment'), href: '/tariffs#equipment' },
    { value: t('nav.support'), href: 'https://wa.me/+996557065019' },
    { value: t('nav.about'), href: '/about' },
    { value: t('nav.balanceCheck'), href: '/check' }
  ];

  const toggleBurger = () => {
    setIsActive(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div 
        className={`${styles['burger-btn']} ${isActive ? styles.active : ''}`} 
        onClick={toggleBurger}
      >
        <span></span>
      </div>
      <div className={styles.navigation}>
        <Navigation modalActive={modalActive} setModalActive={setModalActive} menu={menu} />
      </div>
      <Burger menu={menu} isOpen={isActive} />
    </header>
  );
};

export default Header;
