import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../Footer';
import Request from '../Request';
import ScrollToTop from '../ScrollToTop';
import Navbar from '../Navbar';
import File from './Announcementfile';

function Home () {
    return (
        <>
            <Navbar />
            <HeroSection />
            <File />
            <Cards />
            <Request />
            <Footer />
            <ScrollToTop />       
        </>
    );
}

export default Home;