import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../Footer';
import Request from '../Request';
import ScrollToTop from '../ScrollToTop';
import Navbar from '../Navbar';


function Home () {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Cards />
            <Request />
            <Footer />
            <ScrollToTop />       
        </>
    );
}

export default Home;