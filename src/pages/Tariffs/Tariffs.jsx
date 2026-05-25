import React from 'react'
import styles from './Tariffs.module.scss'     
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subheader from '../../components/Subheader/Subheader'
import rocketRed from '../../images/icon/rocket .svg'
import rocketYellow from '../../images/icon/rocket 2 1.svg'
import rocketBlue from '../../images/icon/rocket 3 1.svg'
import routerRed from '../../images/icon/router-2-xxl 1.svg'
import routerBlue from '../../images/icon/router-2-xx 1.svg'
import routerYellow from '../../images/icon/router-2-x 1.svg'
import pultRed from '../../images/icon/pult 1 1.svg'
import pultBlue from '../../images/icon/pult 2 1.svg'
import pultYellow from '../../images/icon/pult 3 1.svg'
import tvBoxRed from '../../images/icon/new pult 1.svg'
import tvBoxYellow from '../../images/icon/tv-box_1563365 1.svg'
import tvBoxBlue from '../../images/icon/new pult 3 1.svg'
import Request from '../../components/Home/Request'
import Equipment from '../../components/TariffComponents/Equipment/Equipment'
import Questions from '../../components/TariffComponents/Questions/Questions'
const Tariffs = ({modalActive, setModalActive}) => {
  return (
    <section className={styles.tariffs}>
        <Header/>
        <Subheader customStyle={styles.custom_subheder}/>
        <main>
            <div className={styles.container}>
            <h3 className={styles.tariffs__inet_title}>Интернет</h3>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={`${styles["card-title"]} ${styles.red}`}>
                            <h3>ЖыргалАй 30</h3>
                        </div>
                        <div className={styles["card-speed"]}>
                            <div>
                                <img src={rocketRed} alt="rocketREd" />
                                <span>100</span> Мбит/сек
                            </div>
                            <p>Тарифы для частных домов</p>
                        </div> 
                        <div className={styles["card-router"]}>
                            <img src={routerRed} alt="router" />
                            <div>
                                <h4>GPON терминал с WI - FI</h4>
                                <p>В аренду<br /> 250 с/мес</p>
                            </div>
                        </div>
                        <div className={styles["card-price"]}>
                            <div>590 <span>С/месяц</span> </div>
                            <button onClick={() => setModalActive(true)} className={styles["red"]}>Подключить</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles["card-title"]} ${styles.yellow}`}>
                            <h3>Вплюсе 50</h3>
                        </div>
                        <div className={styles["card-speed"]}>
                            <div>
                                <img src={rocketYellow} alt="rocketREd" />
                                <span>200</span> Мбит/сек
                            </div>
                            <p>Тарифы для частных домов</p>
                        </div>
                        <div className={styles["card-router"]}>
                            <img src={routerYellow} alt="router" />
                            <div>
                                <h4>GPON терминал с WI - FI</h4>
                                <p>В аренду<br /> 250 с/мес</p>
                            </div>
                        </div>
                        <div className={styles["card-price"]}>
                            <div>750 <span>С/месяц</span> </div>
                            <button onClick={() => setModalActive(true)} className={styles["yellow"]}>Подключить</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles["card-title"]} ${styles.blue}`}>
                            <h3>Сонун 300</h3>
                        </div>
                        <div className={styles["card-speed"]}>
                            <div>
                                <img src={rocketBlue} alt="rocketREd" />
                                <span>300</span> Мбит/сек
                            </div>
                            <p>Тарифы для частных домов</p>
                        </div>
                        <div className={styles["card-router"]}>
                            <img src={routerBlue} alt="router" />
                            <div>
                                <h4>GPON терминал с WI - FI</h4>
                                <p>В аренду<br /> 250 с/мес</p>
                            </div>
                        </div>
                        <div className={styles["card-price"]}>
                            <div>1500 <span>С/месяц</span> </div>
                            <button onClick={() => setModalActive(true)} className={styles.blue}>Подключить</button>
                        </div>
                    </div>
                </div>
                <h3 className={styles.tariffs__inettv_title}>Интернет + ТВ</h3>

                <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={`${styles["card-title"]} ${styles.red}`}>
                        <h3>ЖыргалАй 30 + ТВ</h3>
                    </div>
                    <div className={styles["card-speed"]}>
                        <div>
                            <img src={rocketRed} alt="rocketREd" />
                            <span>100</span> Мбит/сек
                        </div>
                        <p>Тарифы для частных домов</p>
                        <div>
                            <img src={pultRed} alt="rocketREd" />
                            <span>170</span> каналов
                        </div>
                    </div>
                    <div className={styles["card-router"]}>
                        <img src={tvBoxRed} alt="router" />
                        <div>
                            <p>ТВ архив  до 1 суток</p>
                            <p>Просмотр с 2 устройств</p>
                            <p>Онлайн киноетатр START</p>
                        </div>
                    </div>
                    <div className={styles["card-price"]}>
                        <div>750 <span>С/месяц</span> </div>
                        <button onClick={() => setModalActive(true)} className={styles["red"]}>Подключить</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles["card-title"]} ${styles.yellow}`}>
                        <h3>Вплюсе 50 +  ТВ</h3>
                    </div>
                    <div className={styles["card-speed"]}>
                        <div>
                            <img src={rocketYellow} alt="rocketREd" />
                            <span>200</span> Мбит/сек
                        </div>
                        <p>Тарифы для частных домов</p>
                        <div>
                            <img src={pultYellow} alt="rocketREd" />
                            <span>170</span> каналов
                        </div>
                    </div>
                    <div className={styles["card-router"]}>
                        <img src={tvBoxYellow} alt="router" />
                        <div>
                            <p>ТВ архив  до 3 суток</p>
                            <p>Просмотр с 3 устройств</p>
                            <p>Онлайн киноетатр START</p>
                        </div>
                    </div>
                    <div className={styles["card-price"]}>
                        <div>1500 <span>С/месяц</span> </div>
                        <button onClick={() => setModalActive(true)} className={styles["yellow"]}>Подключить</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles["card-title"]} ${styles.blue}`}>
                        <h3>Сонун 300 + ТВ</h3>
                    </div>
                    <div className={styles["card-speed"]}>
                        <div>
                            <img src={rocketBlue} alt="rocketREd" />
                            <span>300</span> Мбит/сек
                        </div>
                        <p>Тарифы для частных домов</p>
                        <div>
                            <img src={pultBlue} alt="rocketREd" />
                            <span>170</span> каналов
                        </div>
                    </div>
                    <div className={styles["card-router"]}>
                        <img src={tvBoxBlue} alt="router" />
                        <div>
                            <p>ТВ архив  до 5 суток</p>
                            <p>Просмотр с 3 устройств</p>
                            <p>Онлайн киноетатр START</p>
                        </div>
                    </div>
                    <div className={styles["card-price"]}>
                        <div>2000 <span>С/месяц</span> </div>
                        <button onClick={() => setModalActive(true)} className={styles.blue}>Подключить</button>
                    </div>
                </div>
                </div>
                
            </div>
            <Request customStyle={styles.custom_request} />
            <Equipment/>
            <Questions/>
        </main>
        <Footer/>
    </section>
  )
}

export default Tariffs
