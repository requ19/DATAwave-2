import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.scss'
import AdvantagesCompon from '../../Home/Advantages'

const Advantages = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.advantages}>
        <div className={styles.container}>
            <h2 className={styles.advantages__title}>{t('about.advantagesTitle')}</h2>
            <div className={styles.advantages__subtitle}>
            {t('about.advantagesSubtitle')}
            <ul>
                <li>{t('about.li1')}</li>
                <li>{t('about.li2')}</li>
                <li>{t('about.li3')}</li>
                <li>{t('about.li4')}</li>
            </ul>
            </div>
            <AdvantagesCompon customStyle={styles.custom_none} />
        </div>
    </section>
  )
}

export default Advantages
