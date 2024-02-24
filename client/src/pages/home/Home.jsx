import React from 'react';
import '../../App.css'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Tutorial from '../../components/Tutorial/Tutorial';
import Get from '../../components/Get/Get';
import Footer from '../../components/Footer/Footer';
import "./home.css"


const Home = () => {
  return (
    <>
    <Navbar/>
    <div id='home'>

    <Header/>
    <About/>
    <Get/>
    <Tutorial/>
    <Footer/>
    </div>
    </>
  )
}

export default Home