import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Questions.module.scss";
import arrDown from '../../../images/TariffComponents/Questions/arr-dw.svg'
import arrUp from '../../../images/TariffComponents/Questions/arr-up.svg'

const Questions = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.questions}>
      <div className={styles.container}>
        <h2 className={styles.questions__title}>{t('faq.title')}</h2>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}>
              <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                {item.question}
                <span className={styles.icon}>
                  {openIndex === index ? <img src={arrUp} alt="" /> : <img src={arrDown} alt="" />}
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  {item.answer.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
