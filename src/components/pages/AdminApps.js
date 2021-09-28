import React, { useState, useEffect } from 'react'
import "../style/Login.css"
import firebase from '../../config/firebase-config';
import AdminDashboard from './AdminDashboard';
import AdminLogin from './AdminLogin';


const AdminApps = () => {

    const [ useradmin, setUserAdmin ] = useState('');
    const [ emailadmin, setEmailAdmin ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ hasAccount, setHasAccount ] = useState(false);

    const clearInputs = () => {
        setEmailAdmin('');
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
        .signInWithEmailAndPassword(emailadmin, password)
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/useradmin-disabled":
                case "auth/useradmin-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
                default:
                    
            }
        });
    };

    const handleSignup = () => {
        clearErrors();
        firebase
        .auth()
        .createUserWithEmailAndPassword(emailadmin, password)
        .catch(err => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
                default:

            }
        });
    };

    const handleLogout = () => {
        firebase
        .auth()
        .signOut();
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged(useradmin => {
            if(useradmin){
                clearInputs();
                setUserAdmin(useradmin);
               
            } else {
                setUserAdmin("");
                
            }
        });
    });


    return (
        <div className="App">
            
            {useradmin ? (
                <AdminDashboard
                handleLogout={handleLogout}
                useradmin={useradmin}
                emailadmin={emailadmin}
               />   
            ) : (
                <AdminLogin 
                email={emailadmin} 
                setEmailAdmin={setEmailAdmin}
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
