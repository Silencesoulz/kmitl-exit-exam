import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './style/Navbar.css';
import { auth } from '../config/firebase-config'



function Navbar({ user }) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }       
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className = "navbar">
            <div className = "navbar-container"> 
            <Link to="/" className = "navbar-logo" onClick={closeMobileMenu}>   
            KMITL Exit Exam &nbsp;&nbsp;
            <i class="fas fa-school"></i>   
            <h1>{user.displayName}</h1>
            <img src={user.photoURL} alt="profile image" />
            </Link>
                <div className = 'menu-icon' onClick={ handleClick }>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}> 
                    <li className='nav-item'>
                        <Link to='/' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        หน้าหลัก
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/tips' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                       เทคนิคพิชิต Exit Exam
                        </Link>
                    </li>              
                    <li className='nav-item'>
                        <Link to='/sendscore' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        ยื่นคะแนน
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signup' 
                        className='nav-links-mobile' 
                        onClick={closeMobileMenu}>
                        Login
                        <br />
                        <i className='fas fa-sign-in-alt' />
                        </Link>
                    </li>                                
                </ul>
                <Link to='/signup' className='btn-mobile'>
                {button && <Button buttonStyle='btn--outline'>
                <i className='fas fa-sign-in-alt' /> Login

                </Button>}
                </Link>
            </div>
        </nav>
    </>
    )
}

export default Navbar
