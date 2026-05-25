import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./PromoBlock.module.scss";
import iconNotes from '../../../images/Season/Group 48.svg'
import iconCal from '../../../images/Season/абон 1 (1).svg'
import iconInet from '../../../images/Season/Free dom.svg'
import iconInetHand from '../../../images/Season/рассрочка 1 (1).svg'

const PromoBlock = () => {
  const { t } = useTranslation();
  const steps = [
    { icon: iconNotes, title: t('promos.s_step1') },
    { icon: iconCal, title: t('promos.s_step2') },
    { icon: iconInet, title: t('promos.s_step3') },
    { icon: iconInetHand, title: t('promos.s_step4') },
  ];
  return (
    <section className={styles.promoSection}>
        <div className={styles.container}>
            <h2 className={styles.title}>{t('promos.seasonTitle')}</h2>
            <p className={styles.subtitle}>{t('promos.seasonSubtitle')}</p>
            <div className={styles.flex}>
                {steps.map((step, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.wrapper_img}><img src={step.icon} alt={step.title} className={styles.icon} /></div>
                    <div className={styles.cardContent}>{step.title}</div>
                </div>
                ))}
            </div>
            <p className={styles.info}>{t('promos.seasonInfo')}</p>
            <p className={styles.info}>{t('promos.seasonArea')}</p>
            <p className={styles.notice}>{t('promos.seasonNotice')}</p>
        </div>
    </section>
  );
};

export default PromoBlock;
