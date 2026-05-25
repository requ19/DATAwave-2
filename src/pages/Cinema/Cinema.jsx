import React from 'react'
import styles from './Cinema.module.scss'
import Header from '../../components/Header'
import Subheader from '../../components/Subheader'
import Footer from '../../components/Footer'
import Connect from '../../components/CinemaCompon/ConnectCInema/Connect'
import Online from '../../components/CinemaCompon/OnlineCinema/Online'
import Kino from '../../components/CinemaCompon/KinoSlider/Kino'
const Cinema = ({modalActive, setModalActive}) => {
  return (
    <>
      <Header/>
      <Subheader/>
      <main>
            <Connect modalActive={modalActive} setModalActive={setModalActive}/>
            <Online/>
            <Kino/>
      </main>
      <Footer/>
    </>
  )
}

export default Cinema
