import React from 'react'
import '../style/File.css'
function Announcementfile() {

    return (
      <div className='File'>
          <br/><br/>
          <h1 align='center'>เอกสารการจัดสอบวัดความรู้ทักษะภาษาอังกฤษก่อนสำเร็จการศึกษา (English Exit Exam)</h1>
          <p/>
          <h1 align='center'>ประจำปีการศึกษา 2564</h1>
        <div className='download-color'>
          <a 
          href="https://firebasestorage.googleapis.com/v0/b/my-exit-exam-react.appspot.com/o/announcement.pdf?alt=media&token=136d7686-47f3-4a32-9975-5b360cc346cf"
          target="_blank"
          rel="noreferrer"
          > 
          Download <i class="fas fa-download"></i>
          </a>
          <br/>
          <br/>
          <br/>
          <hr/>
        </div>
      </div>
      
    );
  }

export default Announcementfile



