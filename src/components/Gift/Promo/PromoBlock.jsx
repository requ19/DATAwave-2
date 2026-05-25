import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./PromoBlock.module.scss";
import iconNotes from '../../../images/Gift/icon-notes.svg'
import iconCal from '../../../images/Gift/icon-calendar.svg'
import iconInet from '../../../images/Gift/icon-inet.svg'
import iconInetHand from '../../../images/Gift/icon-inethand.svg'

const PromoBlock = () => {
  const { t } = useTranslation();
  const steps = [
    { icon: iconNotes, title: t('promos.g_step1') },
    { icon: iconCal, title: t('promos.g_step2') },
    { icon: iconInet, title: t('promos.g_step3') },
    { icon: iconInetHand, title: t('promos.g_step4') },
  ];
  return (
    <section className={styles.promoSection}>
        <div className={styles.container}>
            <h2 className={styles.title}>
                {t('promos.giftTitle').split(t('promos.giftHighlight'))[0]}
                <span className={styles.highlight}>{t('promos.giftHighlight')}</span>
                {t('promos.giftTitle').split(t('promos.giftHighlight'))[1]}
            </h2>
            <p className={styles.subtitle}>{t('promos.giftSubtitle')}</p>
            <div className={styles.flex}>
                {steps.map((step, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.wrapper_img}><img src={step.icon} alt={step.title} className={styles.icon} /></div>
                    <div className={styles.cardContent}>{step.title}</div>
                </div>
                ))}
            </div>
            <p className={styles.info}>{t('promos.giftInfo')}</p>
            <p className={styles.info}><strong>Акция распространяется на жителей:</strong> {t('promos.giftArea')}</p>
            <p className={styles.notice}>{t('promos.giftNotice')}</p>
        </div>
    </section>
  );
};

export default PromoBlock;
