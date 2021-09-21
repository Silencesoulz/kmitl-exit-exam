import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../Footer';
import Request from '../Request';
import ScrollToTop from '../ScrollToTop';


function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Request />
            <Footer />
            <ScrollToTop />          
        </>
    );
}

export default Home;