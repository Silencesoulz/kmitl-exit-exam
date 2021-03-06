import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './style/Navbar.css';
import firebase from '../config/firebase-config';
import 'firebase/auth';




function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  //Login and Signout

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
    'hd': 'kmitl.ac.th',
    
  })
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var email = user.email;
        setUser(email)

      } else {
        // User is signed out
        setUser(null)
      }
    });
  }, [])

  function signInWithGooglePopup() {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log('User has signed in.')
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(`Errors occurred during sign in: 
          ${errorCode}, ${errorMessage}, ${email}, ${credential}`)
      });

  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/">
            <img 
            src="images/kmitllogo.png" 
            alt="kmitlexitexam logo"
            width='165px'
            className="navbar-logo"
            />
            </a>
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            K- EXIT EXAM &nbsp;
            <i class="fas fa-school"></i>
          </Link> */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                ????????????????????????
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/tips'
                className='nav-links'
                onClick={closeMobileMenu}>
                ????????????????????????????????? EXIT EXAM
              </Link>
            </li>
            {user ? (<li className='nav-item'>
              <Link to='/form'
                className='nav-links'
                onClick={closeMobileMenu}>
                ???????????????????????????
              </Link>
            </li>) : (
              <li className='nav-item'>
                <Link to='/'
                  className='nav-links'
                  onClick={() => {
                    signInWithGooglePopup()
                  }}
                >
                  ???????????????????????????
                </Link>
              </li>
            )}

            {/* Hamburger button */}

            {user ? (<li className='nav-item'>
              <Link to='/'
                className='nav-links-mobile'
                onClick={() => {
                  // signout  
                  firebase.auth().signOut()
                    .then(() => {
                      console.log('User has signed out.')
                    })
                    .catch((err) => {
                      console.log('Error signing out: ', err)
                    })
                }}
              >
                {user} Signout <i className='fas fa-sign-out-alt' />
                <br />
              </Link>
            </li>) : (
              <li className='nav-item'>
                <Link to='/login'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                  // onClick={() => {
                  //   signInWithGooglePopup()
                  // }}
                  ><i className='fas fa-sign-in-alt' /> Login
                </Link>
              </li>
            )}
          </ul>

          {/* web nav button */}

          {user ? (<Link to='/'
            className='btn-mobile'
          >
            {button && <Button
              className='btn-mobile'
              buttonStyle='btn--outline'
              onClick={() => {
                // signout
                firebase.auth().signOut()
                  .then(() => {
                    console.log('User has signed out.')
                  })
                  .catch((err) => {
                    console.log('Error signing out: ', err)
                  })
              }}
            >
              {user} <i className='fas fa-sign-out-alt' />
            </Button>}
          </Link>) : (
            <Link to='/login'
              className='btn-mobile'
            >
              {button && <Button
                className='btn-mobile'
                buttonStyle='btn--outline'
                // onClick={() => {
                //   signInWithGooglePopup()
                // }}
              >
                <i className='fas fa-sign-in-alt' /> Login
              </Button>}
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar