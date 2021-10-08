import React, {useEffect, useState } from 'react'
import firebase from '../config/firebase-config';
import 'firebase/auth';
import './style/Request.css';

function Request() {

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
        <div className='text'>
            <h1>สำหรับนักศึกษาที่ต้องการยื่นคำร้อง</h1>
            <p>นักศึกษาที่ยังไม่มีผลสอบหรือยังสอบไม่ผ่านสามารถยื่นคำร้องและให้เหตุผลได้ที่นี่ !</p>
            {user ? ( 
            <p>
                <a
            class="btn btn-danger button"
            href={'/requestform'}
            >กดที่นี่เพื่อยื่นคำร้อง</a></p> 
            ) : (
            <p>
                <a
            class="btn btn-danger button"
            href={'/login'}
            >กดที่นี่เพื่อยื่นคำร้อง</a></p> 
            )}      
            <div>
                <br/>
                <hr/>
                <br/>
                <br/>
            </div>
            <div className='text'> 
              <h2>นักศึกษาสามารถติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่นี่ "SCAN QRCODE HERE !"</h2>
              <br/>
              <img src="/images/Line QR.JPG" className="qrcode" alt="QR code"/>
              <br/>
              <br/>
              <br/>
            </div>
         </div>
         
       
    )
}

export default Request
