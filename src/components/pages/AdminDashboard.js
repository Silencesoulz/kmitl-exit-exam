import React from 'react'
import CardItem from '../CardItem';
import Clock from 'react-live-clock';
import '../style/Login.css'

const AdminDashboard = ({handleLogout}, props) => {

   
    return (
        <section className="hero">
            <nav>  
            <h2>Welcome Admin!</h2> 
            <button onClick={handleLogout} type="button" className="buttonnaja">Logout</button>  
            </nav>
            <nav>
            <Clock
          format={'dddd, MMMM Do YYYY, h:mm:ss A'}
          ticking={true} />
            </nav>     
            <div className ='cards' id='cards'>
                        <h1 className="adminfont">เครื่องมือสำหรับแอดมิน (Tools)</h1>
                        <br/>
                        <br/>
                        <ul className="cards__items">
                        <CardItem
                        src="images/Firebaseimg.png"
                        text="ฐานข้อมูล Firebase"
                        p="- ล็อกอินด้วย Account ที่ใช้สำหรับแอดมิน"
                        label='ฐานข้อมูล Firebase'  
                        path={'//console.firebase.google.com/u/0/project/my-exit-exam-react/firestore/data/~2Fstudents'}
                        />
                      
                        <CardItem
                        src="images/Retool.png"
                        text="ระบบตรวจสอบคะแนนนักศึกษา"
                        p="- ล็อกอินด้วย Account สำหรับแอดมิน เพื่อเข้าสู่ระบบจัดการคะแนนนักศึกษา"
                        label='ระบบตรวจสอบคะแนนนักศึกษา'
                        path={'//kmitlexitexam.retool.com/editor/KMITL%20EXIT%20EXAM%20Admin%20Panel'}
                        />
                     
            </ul>
            </div>
           
        </section>
    )
}

export default AdminDashboard
