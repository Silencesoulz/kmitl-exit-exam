import React, { useState, useEffect } from 'react'
import firebase from '../../config/firebase-config';
import 'firebase/auth'
import { db } from '../../config/firebase-config';
import '../style/RequestForm.css'
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react"
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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

  const [name1, setName1] = useState("");
  const [lastname, setLastname] = useState("");
  const [studentid, setStudentID] = useState("");
  const [detail, setDetail] = useState("");
  const [expectmonth, setExpectMonth] = useState("");
  const timestamp = firebase.firestore.Timestamp.fromDate(new Date()).toDate();
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    db.collection('Request').add({
      Name: name1,
      Lastname: lastname,
      Timestamp: timestamp,
      Detail: detail,
      Email: user,
      Expectmonth: expectmonth,
      StudentID: studentid,
      Status: status,
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
    setStudentID("");
    setExpectMonth("");
    setStatus("");
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
            <div />
          )
          }
          <br />
          <h3 className="textforh3form">แบบฟอร์มยื่นคำร้อง</h3>
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
              placeholder="รหัสนักศึกษา"
              type="text"
              value={studentid}
              onChange={(e) => setStudentID(e.target.value)}
              required
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
          <br />

          <FormControl fullWidth>
            <InputLabel id="">&nbsp;&nbsp;&nbsp;สถานะการสอบวัดระดับภาษาอังกฤษ</InputLabel>
            <Select
              name="status"
              labelId="status"
              id="status"
              variant="filled"
              value={status}
              onChange={(e => setStatus(e.target.value))}
              required
            >
              <MenuItem value='S - สอบ Exit Exam ผ่านแล้ว'>S - สอบ Exit Exam ผ่านแล้ว</MenuItem>
              <MenuItem value='U - สอบ Exit Exam ยังไม่ผ่าน'>U - สอบ Exit Exam ยังไม่ผ่าน</MenuItem>
              <MenuItem value='Exempt - ใช้คะแนนสอบภาษาอื่น'>Exempt - ใช้คะแนนสอบภาษาอื่น</MenuItem>
              <MenuItem value='ยังไม่เคยสอบ Exit Exam หรือยื่นคะแนนอื่น'>ยังไม่เคยสอบ Exit Exam หรือยื่นคะแนนอื่น</MenuItem>
              
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth className="monthcontainer">
            <FormLabel component="legend">ท่านคาดว่าจะไปสอบ Exit Exam หรือสอบภาษาอังกฤษอื่นๆ เมื่อไหร่? (สำหรับนักศึกษาที่ยังไม่ผ่านและยังไม่เคยสอบ)</FormLabel>
            <RadioGroup
              aria-label=""
              name="controlled-radio-buttons-group"
              value={expectmonth}
              onChange={(e) => setExpectMonth(e.target.value)}
            >
              <FormControlLabel value="มีนาคม" control={<Radio />} label="เดือน มีนาคม" />
              <FormControlLabel value="เมษายน" control={<Radio />} label="เดือน เมษายน" />
              <FormControlLabel value="พฤษภาคม" control={<Radio />} label="เดือน พฤษภาคม" />
              <FormControlLabel value="มิถุนายน" control={<Radio />} label="เดือน มิถุนายน" />
              <FormControlLabel value="กรกฏาคม" control={<Radio />} label="เดือน กรกฎาคม" />
              <FormControlLabel value="อื่นๆ" control={<Radio required/>} label="อื่นๆ เช่น นักศึกษามีผลการสอบผ่านแล้ว" />
            </RadioGroup>
          </FormControl>
          <br/>
          <br/>
      
          <fieldset className="monthcontainer">
          <h4>หมายเหตุ (สำหรับนักศึกษาที่ยังไม่ผ่านและยังไม่เคยสอบ)</h4>
            <textarea
              placeholder="กรุณาให้เหตุผลที่ท่านยังไม่สามารถไปสอบ (เช่น รอสอบพร้อมเพื่อน, ยังไม่สำเร็จการศึกษาในปีนี้)"
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
      <br />
    </div>
  )
}

export default RequestForm
