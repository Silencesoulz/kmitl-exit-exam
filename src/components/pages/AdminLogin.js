import React from 'react'
import '../style/AdminLogin.css'

const AdminLogin = (props) => {

    const { 
        email,
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        emailError, 
        passwordError
        } = props;


    return (
        <section className="login">
            <div className="loginContainer">
                <h1 className="adminheader"><i class="fas fa-user-shield iconadmin"></i>&nbsp;&nbsp;Admin Dashboard</h1>
                <br/>
                <br/>
                <label>Username&nbsp;<i class="fas fa-user-tie"></i></label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password <i class="fas fa-unlock-alt"></i></label>
                <input 
                type="password"
                required
                value={password}
                onChange ={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                        <>
                        <br/>
                        <button class="buttonnaja" onClick={handleLogin}>SIGN IN</button>
                        </>    
                </div>
            </div>
        </section>

    )
}

export default AdminLogin
