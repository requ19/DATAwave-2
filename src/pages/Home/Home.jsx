import React from 'react'
import Header from '../../components/Header'
import Subheader from '../../components/Subheader/Subheader'
import Main from '../../components/Home/Main/Main'
import Footer from '../../components/Footer'
import Bid from '../../components/BidForm/Bid'

const Home = ({modalActive, setModalActive}) => {
  return (
    <>
      <Header modalActive={modalActive} setModalActive={setModalActive} />
      <Subheader/>
      <Main modalActive={modalActive} setModalActive={setModalActive} />
      <Footer modalActive={modalActive} setModalActive={setModalActive} />
    </>
  )
}

export default Home
