import React from 'react';
import '../App.css';
import { Button } from './Button';
import './style/HeroSection.css';
import './style/Button.css';
import Tips from './pages/Tips';
import Cards from './Cards';
import Typewriter from 'typewriter-effect'



function HeroSection() {
    return (
        // <section id = "Home">
        <div className='hero-background'>
        <div className='hero-container'>
   
            {/* <video src='/videos/video-3.mp4' 
            autoPlay
            loop
            muted/> */}
            <br />
            <br />
            <br />
            <h1>KMITL EXIT EXAM</h1>
            <br />
            <div className ="type-writer">
            <Typewriter
            options={{
            strings: ['Are you ready to pass?'],
            autoStart: true,
            loop: true,
            TypeSpeed : 20,
            deleteSpeed: 10000000,
            className:'hero-container',
            }}
            />
            </div>
            <div className='hero-btns'>
            <br />
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            > GET STARTED <i class="fas fa-play-circle"></i>
            </Button>
         
            </div>  
        </div>  
        </div>
        // </section>
    )
}
export default HeroSection;
