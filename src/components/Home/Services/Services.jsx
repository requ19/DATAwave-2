import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Services.module.scss'
import post1 from '../../../images/Home/Services/postt-1.png'
import post2 from '../../../images/Home/Services/post-2.png'
import post3 from '../../../images/Home/Services/post-3.png'

const Services = ({modalActive, setModalActive}) => {
    const { t } = useTranslation();
    const [zorActive, setZorActive] = useState('zor')

  return (
    <section className={styles.services}>
            <div className={styles.container}>
                    <h2 className={styles.services__title}>{t('services.title')}</h2>
                    <div className={styles.tvinfo}>
                            <div className={`${styles.tvinfo__zor} ${zorActive === 'zor' ? styles.tvinfo__active : ''}`} onClick={() => setZorActive('zor')}>{t('services.zorTV')}</div>
                            <div className={`${styles.tvinfo__cinema} ${zorActive === 'cinema' ? styles.tvinfo__active : ''}`} onClick={() => setZorActive('cinema')}>{t('services.onlineCinema')}</div>
                            <div className={`${styles.tvinfo__support} ${zorActive === 'support' ? styles.tvinfo__active : ''}`} onClick={() => setZorActive('support')}>{t('services.support')}</div>
                    </div>
                    <div className={styles.services__posters}>
                        {zorActive === 'zor' && (
                                <div className={styles.services__poster}>
                                <div className={styles.services__poster_info}>
                                        <h2 className={styles.services__poster_title}>{t('services.zorTV')}</h2>
                                        <p className={styles.services__poster_description}>{t('services.zorTVDesc')}</p>
                                        <button onClick={() => setModalActive(true)} className={styles.services__poster_btn}>{t('services.connectBtn')}</button>
                                </div>
                                <img className={styles.services__poster_img1} src={post1} alt="" />
                        </div>
                        )}
                        {zorActive === 'cinema' && (
                                <div className={styles.services__poster}>
                                <div className={styles.services__poster_info}>
                                        <h2 className={styles.services__poster_title}>{t('services.onlineCinemaTitle')}</h2>
                                        <p className={styles.services__poster_description}>{t('services.onlineCinemaDesc')}</p>
                                        <button onClick={() => setModalActive(true)} className={styles.services__poster_btn}>{t('services.connectBtn')}</button>
                                </div>
                                <img className={styles.services__poster_img2} src={post2} alt="" />
                        </div>
                        )}
                        {zorActive === 'support' && (
                                <div className={styles.services__poster}>
                                <div className={styles.services__poster_info}>
                                        <h2 className={styles.services__poster_title}>{t('services.supportTitle')}</h2>
                                        <p className={styles.services__poster_description}>{t('services.supportDesc')}</p>
                                        <button 
                                        onClick={() => window.open("https://wa.me/996557065019", "_blank")} 
                                        className={styles.services__poster_btn}
                                        >
                                        {t('services.writeBtn')}
                                        </button>
                                </div>
                                <img className={styles.services__poster_img3} src={post3} alt="" />
                        </div>
                        )}
                    </div>
            </div>
    </section>
  )
}

export default Services
