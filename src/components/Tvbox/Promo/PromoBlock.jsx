import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./PromoBlock.module.scss";
import iconNotes from '../../../images/Tvbox/1.svg'
import iconCal from '../../../images/Tvbox/2.svg'
import iconInet from '../../../images/Tvbox/3.svg'
import iconInetHand from '../../../images/Tvbox/4.svg'

const PromoBlock = () => {
  const { t } = useTranslation();
  const steps = [
    { icon: iconNotes, title: t('promos.t_step1') },
    { icon: iconCal, title: t('promos.t_step2') },
    { icon: iconInet, title: t('promos.t_step3') },
    { icon: iconInetHand, title: t('promos.t_step4') },
  ];
  return (
    <section className={styles.promoSection}>
        <div className={styles.container}>
            <h2 className={styles.title}>{t('promos.tvboxTitle')}</h2>
            <p className={styles.subtitle}>{t('promos.tvboxSubtitle')}</p>
            <div className={styles.flex}>
                {steps.map((step, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.wrapper_img}><img src={step.icon} alt={step.title} className={styles.icon} /></div>
                    <div className={styles.cardContent}>{step.title}</div>
                </div>
                ))}
            </div>
            <p className={styles.info}>{t('promos.tvboxInfo')}</p>
            <p className={styles.info}><strong>Акция распространяется на жителей:</strong> {t('promos.tvboxArea')}</p>
            <p className={styles.notice}>{t('promos.tvboxNotice')}</p>
        </div>
    </section>
  );
};

export default PromoBlock;
