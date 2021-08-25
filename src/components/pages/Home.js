import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../Footer';
import Tips from './Tips';
import ScrollToTop from '../ScrollToTop';


function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Home;