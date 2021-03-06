import React, { useState, useEffect} from 'react'
import '../style/Login.css'
import firebase from '../../config/firebase-config';
import 'firebase/auth'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';

function Login() {
    
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: 'select_account',
        'hd': 'kmitl.ac.th',
        
    })
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

    return (

       <section className="login">
         { user ? (
       <div/>
         ) : (
          <div className="loginContainer">
          <h1 align="center" className="headerpos"> สำหรับนักศึกษาให้ล็อกอินด้วยอีเมล์สถาบัน </h1>
          <p align="center" className="headerpos1">ยืนยันตัวตนด้วยบริการของ Google</p>
          <p align="center" className="headerpos1">โดยใช้ Account (gen2) ของสถาบันฯ</p>
          <br/>
          <p align="center" className="headerpos2">กรุณาล็อกอินด้วย Browser (Google Chrome, Microsoft Edge และ Safari)</p>
          <br/>
          <div className="btn-center">
          <Link to='/'>
          <GoogleButton
          onClick={() => {
                signInWithGooglePopup()
              }}
              >
          Login with google EMAIL
          </GoogleButton>
          </Link>
          </div>
          <br/>
          <br/>
          <div>
            <hr/>
            <br/>
            <br/>
          <h1 align="center" className="headerpossec">สำหรับเจ้าหน้าที่สารสนเทศ</h1>
          <br/>
          <Link to='/adminlogin'>
            <Button
            className="btn-center"
            variant="primary"
            >
              เข้าสู่ระบบด้วย Username
            </Button>
          </Link>
          </div>
      </div>
         )
}
        </section>
    )
}

export default Login
