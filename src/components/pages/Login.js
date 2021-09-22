import React,{ useState, useEffect } from 'react'
import '../style/Login.css'
import firebase from '../../config/firebase-config';
import 'firebase/auth'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Login() {
    
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
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
        <div class="login-container">
            <h1> สำหรับนักศึกษา </h1>
            <Link to='/'>
            <Button
            variant="primary"
            onClick={() => {
                  signInWithGooglePopup()
                }}
                >
            Login with google
            </Button>
            </Link>
        </div>
    )
}

export default Login
