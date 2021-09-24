import React, { useState, useEffect } from 'react'
import "../style/Login.css"
import firebase from '../../config/firebase-config';
import AdminDashboard from './AdminDashboard';
import AdminLogin from './AdminLogin';
import 'firebase/auth'

const AdminApps = () => {

    const [ user, setUser ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ hasAccount, setHasAccount ] = useState(false);
    
    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }


    const handleLogin = () => {
        clearErrors();
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };

    const handleSignup = () => {
        clearErrors();
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };

    const handleLogout = () => {
        firebase
        .auth()
        .signOut();
    };

    const authListener = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };


    useEffect(() => {
        authListener();
    }, []);

    return (
        <div className="App">
            {user ? (
                <AdminDashboard
                handleLogout={handleLogout}
               />   
            ) : (
                <AdminLogin 
                email={email} 
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                />
            )}      
        </div>
    )
}

export default AdminApps
