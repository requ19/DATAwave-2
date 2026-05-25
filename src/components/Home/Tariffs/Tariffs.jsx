import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import styles from './Tariffs.module.scss'
import rocketRed from '../../../images/icon/rocket .svg'
import rocketYellow from '../../../images/icon/rocket 2 1.svg'
import rocketBlue from '../../../images/icon/rocket 3 1.svg'
import routerRed from '../../../images/icon/router-2-xxl 1.svg'
import routerBlue from '../../../images/icon/router-2-xx 1.svg'
import routerYellow from '../../../images/icon/router-2-x 1.svg'
import pultRed from '../../../images/icon/pult 1 1.svg'
import pultBlue from '../../../images/icon/pult 2 1.svg'
import pultYellow from '../../../images/icon/pult 3 1.svg'
import tvBoxRed from '../../../images/icon/new pult 1.svg'
import tvBoxYellow from '../../../images/icon/tv-box_1563365 1.svg'
import tvBoxBlue from '../../../images/icon/new pult 3 1.svg'
import wifiIcon from '../../../images/icon/wifi icon 1.svg'
import cinema from '../../../images/icon/изображение_2024-10-15_135019841-Photoroom 1.svg'
import arrow from '../../../images/icon/image 3.svg'
import { Link } from 'react-router-dom'

const Tariffs = ({modalActive, setModalActive}) => {
    const { t } = useTranslation();
    const [active, setActive] = useState('inet')

  return (
    <section className={styles.tariffs}>
      <div className={styles.container}>
            <h2 className={styles["tariffs-title"]}>{t('tariffs.title')}</h2>
            <div className={styles["tariffs-btn"]}>
                <div className={`${styles.inet} ${active === 'inet' ? styles.active : ''}`} onClick={() => setActive('inet')}>{t('tariffs.justInternet')}</div>
                <div className={`${styles.inetTV} ${active === 'inetTV' ? styles.active : ''}`} onClick={() => setActive('inetTV')}>{t('tariffs.internetTV')}</div>
            </div>
            {active === 'inet' && (
                <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={`${styles["card-title"]} ${styles.red}`}><h3>ЖыргалАй 30</h3></div>
                    <div className={styles["card-speed"]}>
                        <div><img src={rocketRed} alt="rocket" /><span>100</span> {t('tariffs.mbps')}</div>
                        <p>{t('tariffs.privateHomes')}</p>
                    </div>
                    <div className={styles["card-router"]}>
                        <img src={routerRed} alt="router" />
                        <div>
                            <h4>{t('tariffs.gponTerminal')}</h4>
                            <p>{t('tariffs.rent')}<br /> 250 {t('tariffs.perMonth')}</p>
                        </div>
                    </div>
                    <div className={styles["card-price"]}>
                        <div>590 <span>{t('tariffs.perMonth')}</span></div>
                        <button onClick={() => setModalActive(true)} className={styles["red"]}>{t('tariffs.connectBtn')}</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles["card-title"]} ${styles.yellow}`}><h3>Вплюсе 50</h3></div>
                    <div className={styles["card-speed"]}>
                        <div><img src={rocketYellow} alt="rocket" /><span>200</span> {t('tariffs.mbps')}</div>
                        <p>{t('tariffs.privateHomes')}</p>
                    </div>
                    <div className={styles["card-router"]}>
                        <img src={routerYellow} alt="router" />
                        <div>
                            <h4>{t('tariffs.gponTerminal')}</h4>
                            <p>{t('tariffs.rent')}<br /> 250 {t('tariffs.perMonth')}</p>
                        </div>
                    </div>
                    <div className={styles["card-price"]}>
                        <div>750 <span>{t('tariffs.perMonth')}</span></div>
                        <button onClick={() => setModalActive(true)} className={styles["yellow"]}>{t('tariffs.connectBtn')}</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles["card-title"]} ${styles.blue}`}><h3>Сонун 300</h3></div>
                    <div className={styles["card-speed"]}>
                        <div><img src={rocketBlue} alt="rocket" /><span>300</span> {t('tariffs.mbps')}</div>
                        <p>{t('tariffs.privateHomes')}</p>
                    </div>
                    <div className={styles["card-router"]}>
                        <img src={routerBlue} alt="router" />
                        <div>
                            <h4>{t('tariffs.gponTerminal')}</h4>
                            <p>{t('tariffs.rent')}<br /> 250 {t('tariffs.perMonth')}</p>
                        </div>
                    </div>
                    <div className={styles["card-price"]}>
                        <div>1500 <span>{t('tariffs.perMonth')}</span></div>
                        <button onClick={() => setModalActive(true)} className={styles.blue}>{t('tariffs.connectBtn')}</button>
                    </div>
                </div>
            </div>
            )}

           {active === 'inetTV' && (
             <div className={styles.cards}>
             <div className={styles.card}>
                 <div className={`${styles["card-title"]} ${styles.red}`}><h3>ЖыргалАй 30 + ТВ</h3></div>
                 <div className={styles["card-speed"]}>
                     <div><img src={rocketRed} alt="rocket" /><span>100</span> {t('tariffs.mbps')}</div>
                     <p>{t('tariffs.privateHomes')}</p>
                     <div><img src={pultRed} alt="pult" /><span>170</span> {t('tariffs.channels')}</div>
                 </div>
                 <div className={styles["card-router"]}>
                     <img src={tvBoxRed} alt="tvbox" />
                     <div>
                         <p>{t('tariffs.tvArchive1')}</p>
                         <p>{t('tariffs.view2devices')}</p>
                         <p>{t('tariffs.onlineCinemaStart')}</p>
                     </div>
                 </div>
                 <div className={styles["card-price"]}>
                     <div>750 <span>{t('tariffs.perMonth')}</span></div>
                     <button onClick={() => setModalActive(true)} className={styles["red"]}>{t('tariffs.connectBtn')}</button>
                 </div>
             </div>
             <div className={styles.card}>
                 <div className={`${styles["card-title"]} ${styles.yellow}`}><h3>Вплюсе 50 + ТВ</h3></div>
                 <div className={styles["card-speed"]}>
                     <div><img src={rocketYellow} alt="rocket" /><span>200</span> {t('tariffs.mbps')}</div>
                     <p>{t('tariffs.privateHomes')}</p>
                     <div><img src={pultYellow} alt="pult" /><span>170</span> {t('tariffs.channels')}</div>
                 </div>
                 <div className={styles["card-router"]}>
                     <img src={tvBoxYellow} alt="tvbox" />
                     <div>
                         <p>{t('tariffs.tvArchive3')}</p>
                         <p>{t('tariffs.view3devices')}</p>
                         <p>{t('tariffs.onlineCinemaStart')}</p>
                     </div>
                 </div>
                 <div className={styles["card-price"]}>
                     <div>1500 <span>{t('tariffs.perMonth')}</span></div>
                     <button onClick={() => setModalActive(true)} className={styles["yellow"]}>{t('tariffs.connectBtn')}</button>
                 </div>
             </div>
             <div className={styles.card}>
                 <div className={`${styles["card-title"]} ${styles.blue}`}><h3>Сонун 300 + ТВ</h3></div>
                 <div className={styles["card-speed"]}>
                     <div><img src={rocketBlue} alt="rocket" /><span>300</span> {t('tariffs.mbps')}</div>
                     <p>{t('tariffs.privateHomes')}</p>
                     <div><img src={pultBlue} alt="pult" /><span>170</span> {t('tariffs.channels')}</div>
                 </div>
                 <div className={styles["card-router"]}>
                     <img src={tvBoxBlue} alt="tvbox" />
                     <div>
                         <p>{t('tariffs.tvArchive5')}</p>
                         <p>{t('tariffs.view3devices')}</p>
                         <p>{t('tariffs.onlineCinemaStart')}</p>
                     </div>
                 </div>
                 <div className={styles["card-price"]}>
                     <div>2000 <span>{t('tariffs.perMonth')}</span></div>
                     <button onClick={() => setModalActive(true)} className={styles.blue}>{t('tariffs.connectBtn')}</button>
                 </div>
             </div>
         </div>
           )}

            <div className={styles.additional}>
                <Link to={"/tariffs"} className={styles.additional__inet}>
                    <img src={wifiIcon} alt="wifi icon" />
                    <div>
                        <div>{t('tariffs.combineServices')}</div>
                        <p>{t('tariffs.combineServicesDesc')}</p>
                    </div>
                    <img className={styles.arrow} src={arrow} alt="rightArrow" />
                </Link>
                <Link to={"/cinema"} className={styles.additional__cinema}>
                    <img src={cinema} alt="cinema icon" />
                    <div>
                        <div>{t('tariffs.addCinema')}</div>
                        <p>{t('tariffs.addCinemaDesc')}</p>
                    </div>
                    <img className={styles.arrow} src={arrow} alt="rightArrow" />
                </Link>
            </div>
      </div>
    </section>
  )
}

export default Tariffs
