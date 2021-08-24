import React from 'react';
import './style/Footer.css'
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
            <h2>About Us</h2>
            <Link to='/'className='footer-thai'>Address : อาคารกรมหลวงนราธิวาสราชนครินทร์ 
            ชั้น 10 เลขที่ 1 ซอยฉลองกรุง 1 แขวงลาดกระบัง 
            เขตลาดกระบัง กรุงเทพฯ 10520</Link>
          </div>
          <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href="tel:+66-02-329-8220" className='footer-thai'> 
            <i class="fas fa-phone-square-alt"></i> : 02 329 8220
            </a>
            <a href = "mailto: inter@kmitl.ac.th" className='footer-thai'>
            <i class="fas fa-envelope"></i> : inter@kmitl.ac.th
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
              to={'//www.facebook.com/kmitlofficial'}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={'//www.instagram.com/kmitlofficial/'}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={'//www.youtube.com/user/kmitlengscoop'}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={'//twitter.com/kmitlofficial?lang=en'}
              target='_blank'
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