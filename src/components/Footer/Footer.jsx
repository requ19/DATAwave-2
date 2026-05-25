import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss'
import facebook from '../../images/Footer/facebook icon 1.png'
import inst from '../../images/Footer/instagram icon 1.png'
import tg from '../../images/Footer/Telegram icon 1.png'
import whatsapp from '../../images/Footer/WhatsUpBro 1.png'
import { Link } from 'react-router-dom'

const Footer = ({modalActive, setModalActive}) => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__navigation}>
                    <ul>
                        <Link to='/tariffs#equipment'><li>{t('footer.equipment')}</li></Link>
                        <a href="tel:+996557065019" target='_blank' rel="noreferrer"><li>{t('footer.support')}</li></a>
                        <Link to={'/tariffs'}><li>{t('footer.tariffs')}</li></Link>
                        <Link to={'/promotions'}><li>{t('footer.promotions')}</li></Link>
                    </ul>
                </div>
                <div className={styles.footer__navigation}>
                    <ul>
                        <Link to={'/about'}><li>{t('footer.about')}</li></Link>
                        <Link to={'/payment'}><li>{t('footer.payment')}</li></Link>
                        <Link to={'/cinema'}><li>{t('footer.cinema')}</li></Link>
                        <Link to={'/'}><li>Datawave</li></Link>
                        <a target='_blank' rel="noreferrer" href="https://www.speedtest.net/ru"><li>Speed test</li></a>
                    </ul>
                </div>
                <div className={styles.footer__contact}>
                    <a href='tel:+996557065019' target='_blank' rel="noreferrer" className={styles.footer__btn_lk}>{t('footer.support')}</a>
                    <button onClick={() => setModalActive(true)} className={styles.footer__btn_connect}>{t('footer.connect')}</button>
                    <ul className={styles.footer__btn_number}>
                        <li>0707 68 02 02</li>
                        <li>0557 68 02 02</li>
                        <li>0227 68 02 02</li>
                    </ul>
                </div>
                <div className={styles.footer__socialmedia_wrapper}>
                    <div className={styles.footer__socialmedia}>
                        <a target='_blank' rel="noreferrer" href="https://www.facebook.com/?locale=ru_RU"><img src={facebook} alt="" /></a>
                        <a target='_blank' rel="noreferrer" href="https://www.instagram.com"><img src={inst} alt="" /></a>
                        <a target='_blank' rel="noreferrer" href="https://web.telegram.org/a/"><img src={tg} alt="" /></a>
                        <a target='_blank' rel="noreferrer" href="https://www.whatsapp.com/?lang=ru_RU"><img src={whatsapp} alt="" /></a>
                    </div>
                    <p>{t('footer.social')}</p>
                </div>
            </div>
            <div className={styles.footer__copyright}>{t('footer.copyright')}</div>
            <div className={styles.footer__license}>{t('footer.license')}</div>
            <button className={styles.footer__btn}>{t('footer.support')}</button>
        </div>
    </footer>
  )
}

export default Footer
