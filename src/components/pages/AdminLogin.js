import React from 'react'
import '../style/AdminLogin.css'

const AdminLogin = (props) => {

    const { 
        emailadmin,
        setEmailAdmin, 
        password, 
        setPassword, 
        handleLogin, 
        emailError, 
        passwordError
        } = props;


    return (
        <section className="login">
            <div className="loginContainer">
                <h1 className="adminheader">
                    เข้าสู่ระบบ&nbsp;
                    <i class="fas fa-user-shield iconadmin"></i></h1>   
                <br/>
                <br/>
                <label>Username&nbsp;<i class="fas fa-user-tie"></i></label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={emailadmin} 
                onChange={(e) => setEmailAdmin(e.target.value)}
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
                        <button className="buttonnaja" onClick={handleLogin}>SIGN IN</button>
                        </> 
                       
                </div>
            </div>
        </section>

    )
}

export default AdminLogin
