import React from 'react';
import './style/Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>

            <h2>About Us</h2>
            <Link
              to={'//www.google.com/maps/place/KMITL+School+of+Engineering/@13.7281136,100.7757538,17.38z/data=!4m5!3m4!1s0x311d664a6229ce87:0xe18798804c647947!8m2!3d13.7270848!4d100.7746739'}
              target='_blank'
              rel="noreferrer"
              className='footer-thai'>

              Address : No.1, Soi Chalong Krung 1,
              Chalong Krung Road, Ladkrabang
              Sub-district, Ladkrabang
              district, Bangkok 10520</Link>

          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <a href="tel:+66-02-329-8220" className='footer-thai'>
                <i class="fas fa-phone-square-alt"></i> : 02 329 8321
              </a>
              <a href="mailto: inter@kmitl.ac.th" className='footer-thai'>
                <i class="fas fa-envelope"></i> : ia.eng@kmitl.ac.th
              </a>
            </div>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Learning Path</h2>
            <Link to='/' className='footer-thai'>Sample Exam File</Link>
            <Link to='/' className='footer-thai'>Tutorials</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <h1 className='social-logo'>
              KMITL EXIT EXAM &nbsp;&nbsp;
              <i class="fas fa-school"></i>
            </h1>
          </div>
          <small class='website-rights'>K-EXIT EXAM © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={'//www.facebook.com/kmitl.engineer.inter'}
              target='_blank'
              rel="noreferrer"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link line'
              to={'//page.line.me/?accountId=717zajri'}
              target='_blank'
              rel="noreferrer"
              aria-label='Line'
            >
              <i class='fab fa-line' />
            </Link>

            <Link
              class='social-icon-link instagram'
              to='/'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='/'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;