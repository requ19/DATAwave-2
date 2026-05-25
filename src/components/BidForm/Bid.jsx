import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Bid.module.scss";
import kino from '../../images/Bid/foll.svg';

const Bid = ({ active, setActive }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    tariff: "",
    city: "",
    street: "",
    house: "",
    television: false,
    consent: false,
  });

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className={`${styles.overlay} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>{t('bidForm.title')}</h2>
          <form action="https://getform.io/f/ayvkmwzb" method="POST">
            <input
              className={styles.fio}
              type="text"
              name="fullName"
              placeholder={t('bidForm.fullName')}
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <div className={styles.row}>
              <input
                className={styles.tel}
                type="tel"
                name="phone"
                placeholder={t('bidForm.phone')}
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                className={styles.email}
                name="tariff"
                value={formData.tariff}
                onChange={handleChange}
                required
              >
                <option value="">{t('bidForm.selectTariff')}</option>
                <option value="100 мбит">100 мбит</option>
                <option value="200 мбит">200 мбит</option>
                <option value="300 мбит">300 мбит</option>
                <option value="100 мбит + TV">100 мбит + TV</option>
                <option value="200 мбит + TV">200 мбит + TV</option>
                <option value="300 мбит + TV">300 мбит + TV</option>
              </select>
            </div>
            <div className={styles.adress}>{t('bidForm.address')}</div>
            <div className={styles.row}>
              <input className={styles.city} type="text" name="city" placeholder={t('bidForm.city')} value={formData.city} onChange={handleChange} required />
              <input className={styles.street} type="text" name="street" placeholder={t('bidForm.street')} value={formData.street} onChange={handleChange} required />
              <input className={styles.house} type="text" name="house" placeholder={t('bidForm.house')} value={formData.house} onChange={handleChange} required />
            </div>
            <div className={styles.serv}>{t('bidForm.services')}</div>
            <div className={styles.checkboxRow}>
              <input className={styles.checkbox} type="checkbox" name="television" checked={formData.television} onChange={handleChange} />
              <span className={styles.tv_title}>{t('bidForm.television')}</span>
              <img className={styles.kino_img} src={kino} alt="" />
            </div>
            <input type="hidden" name="television" value={formData.television ? "Да" : "Нет"} />
            <div className={styles.checkboxRow2}>
              <button type="submit" className={styles.submitButton}>{t('bidForm.submit')}</button>
              <input className={styles.checkbox} type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
              <span className={styles.btn_title}>{t('bidForm.consent')}</span>
            </div>
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bid;
