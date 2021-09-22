import React from 'react';
import '../App.css';
import { Button } from './Button';
import './style/HeroSection.css';
import './style/Button.css';
import Typewriter from 'typewriter-effect';
import { HashLink as Link } from 'react-router-hash-link';


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
            <Link smooth to='/#Cards'>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            > GET STARTED <i class="fas fa-play-circle"></i>
            </Button>
            </Link>
            </div>  
        </div>  
        </div>
        // </section>
    )
}
export default HeroSection;
