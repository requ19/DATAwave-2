import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Equipment.module.scss';
import question from '../../../images/TariffComponents/Equipment/vopros.png'
import routerFlex from '../../../images/TariffComponents/Equipment/router-4-flex.svg'
import router4 from '../../../images/TariffComponents/Equipment/router-4.svg'
import tv from '../../../images/TariffComponents/Equipment/pristav.png'

const Equipment = () => {
  const { t } = useTranslation();

  const equipmentData = [
    { name: t('equipment.router'), rent: '150 с/мес', buy: '2500 с', installment: '450 с/мес', img: routerFlex, description: t('equipment.routerDesc'), arenda: t('equipment.rentNote') },
    { name: t('equipment.gpon'), rent: '250 с/мес', buy: '3500 с', installment: '550 с/мес', img: router4, description: t('equipment.gponDesc'), arenda: t('equipment.rentNote') },
    { name: t('equipment.tv'), rent: '250 с/мес', buy: '3500 с', installment: '550 с/мес', img: tv, description: t('equipment.tvDesc'), arenda: t('equipment.rentNote') },
  ];

  useEffect(() => {
    if (window.location.hash === "#equipment") {
      document.querySelector("#equipment")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id='equipment' className={styles.equipment}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>{t('equipment.sectionHeader')}</span>
          <div className={styles.columns}>
            <span>{t('equipment.rent')}</span>
            <span>{t('equipment.buy')}</span>
            <span>{t('equipment.installment')}</span>
          </div>
        </div>
        {equipmentData.map((item, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.name}>
              {item.name} <span className={styles.infoIcon}><img src={question} alt="" /></span>
              <div className={styles.card}>
                  <div className={styles.wrapper_desc}>
                    <span></span>
                    <div>{item.description}</div>
                  </div>
                  <p>{item.arenda}</p>
                  <img src={item.img} alt="" />
              </div>
            </div>
            <div className={styles.info}>
                <div className={styles.price}>{item.rent}</div>
                <div className={styles.price}>{item.buy}</div>
                <div className={styles.price}>{item.installment}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipment;
