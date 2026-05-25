import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./PromoBlock.module.scss";
import iconNotes from '../../../images/Discounts/новык абоненты 2.svg'
import iconCal from '../../../images/Discounts/абон 1.svg'
import iconInet from '../../../images/Discounts/роутер 1.svg'
import iconInetHand from '../../../images/Discounts/рассрочка 1.svg'

const PromoBlock = () => {
  const { t } = useTranslation();
  const steps = [
    { icon: iconNotes, title: t('promos.d_step1') },
    { icon: iconCal, title: t('promos.d_step2') },
    { icon: iconInet, title: t('promos.d_step3') },
    { icon: iconInetHand, title: t('promos.d_step4') },
  ];
  return (
    <section className={styles.promoSection}>
        <div className={styles.container}>
            <h2 className={styles.title}>{t('promos.discountsTitle')}</h2>
            <p className={styles.subtitle}>{t('promos.discountsSubtitle')}</p>
            <div className={styles.flex}>
                {steps.map((step, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.wrapper_img}><img src={step.icon} alt={step.title} className={styles.icon} /></div>
                    <div className={styles.cardContent}>{step.title}</div>
                </div>
                ))}
            </div>
            <p className={styles.info}>{t('promos.discountsInfo')}</p>
            <p className={styles.info}>{t('promos.discountsArea')}</p>
            <p className={styles.notice}>{t('promos.discountsNotice')}</p>
        </div>
    </section>
  );
};

export default PromoBlock;
