import React, { useState, useEffect } from 'react'
import firebase from '../../config/firebase-config';
import 'firebase/auth'
import { db } from '../../config/firebase-config';
import '../style/RequestForm.css'
import {
    Alert,
    AlertIcon,
  } from "@chakra-ui/react"

function RequestForm() {

    const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var email = user.email;
        console.log(`User has signed in with Email: ${email}`)
        setUser(email)

      } else {
        // User is signed out
        console.log('User is not signed in.')
        setUser(null)
      }
    });
  }, [])

    const [ name1, setName1 ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ detail, setDetail ] = useState("");
    const timestamp = firebase.firestore.Timestamp.fromDate(new Date()).toDate();
    const [ error, setError ] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();

        db.collection('Request').add({
            Name: name1,
            Lastname: lastname,
            Timestamp: timestamp,
            Detail: detail,
            Email: user,
        })
            .then(() => {
                alert("ระบบได้ทำการส่งคำร้องของท่านเรียบร้อยแล้ว")
                window.location.href = '/';
            })
            .catch((error) => {
                setError(error)
            });

        setName1("");
        setLastname("");
        setDetail("");
        setError("");
    };

    return (
        <div className="requestbody">
        <div className="container">  
        <form id="contact" onSubmit={onSubmit}>
        {error ? (
        <Alert status="error">
        <AlertIcon />
        กรุณาล็อกอินด้วยอีเมล์สถาบัน
        </Alert>
        ) : (
            <div/>
        )
        }
         <br/>
          <h3>แบบฟอร์มยื่นคำร้อง</h3>
          <h4>สำหรับนักศึกษาที่ไม่สามารถส่งผลสอบได้ในช่วงเวลาที่กำหนด</h4>
          <fieldset>
            <input 
            placeholder="ชื่อ (ภาษาไทย)" 
            type="text" 
            required 
            autofocus 
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input 
            placeholder="นามสกุล (ภาษาไทย)" 
            type="text" 
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input 
            placeholder="Email สถาบัน" 
            type="email" 
            disabled
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            />
          </fieldset>
          <fieldset>
            <textarea 
            placeholder="ให้นักศึกษาอธิบายเหตุผลมาพอสังเขป" 
            required
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            >
            </textarea>
          </fieldset>
          <fieldset>
            <button 
            id="contact-submit" 
            type="submit"
            >
            ส่งแบบฟอร์ม</button>
          </fieldset>
          <p class="copyright">KMITL EXIT EXAM Solution <i class="far fa-smile"></i>  </p>
        </form>
        </div>
      </div>
    )
}

export default RequestForm
