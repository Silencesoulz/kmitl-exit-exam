import React from 'react'
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
        'hd': 'kmitl.ac.th'
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
    
    return (
        <section className="login">
        <div className="loginContainer">
            <h1 align="center" className="headerpos"> สำหรับนักศึกษาให้ล็อกอินด้วยอีเมล์สถาบัน </h1>
            <p align="center" className="headerpos1">ยืนยันตัวตนด้วยบริการของ Google</p>
            <p align="center" className="headerpos1">โดยใช้ account (gen2) ของสถาบันฯ</p>
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
            <h1 align="center" className="headerpossec">สำหรับเจ้าหน้าที่แอดมิน</h1>
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
        </section>
    )
}

export default Login
