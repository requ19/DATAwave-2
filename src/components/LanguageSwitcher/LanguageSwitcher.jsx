import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

const LANGUAGES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'kg', label: 'KG' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className={styles.switcher}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          className={`${styles.btn} ${i18n.language === lang.code ? styles.active : ''}`}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
