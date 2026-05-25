import React from 'react'
import styles from './About.module.scss'
import Header from '../../components/Header'
import Subheader from '../../components/Subheader/Subheader'
import Footer from '../../components/Footer'
import AboutCompany from '../../components/AboutComponents/AboutCompany/AboutCompany'
import AboutInformation from '../../components/AboutComponents/AboutInformation'
import Worth from '../../components/AboutComponents/Worth'
import Advantages from '../../components/AboutComponents/Advantages/Advantages'
const About = () => {
  return (
    <>
        <Header/>
        <Subheader/>
        <main>
            <AboutCompany/>
            <AboutInformation/>
            <Worth/>
            <Advantages/>
        </main>
        <Footer/>
    </>
  )
}

export default About
