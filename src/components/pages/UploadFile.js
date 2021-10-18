import React from 'react'
import Navbar from '../Navbar'
import '../style/UploadFile.css'

const UploadFile = () => {


    return (
        <>
            <Navbar />
            <div>
            <img 
            src="images/4751965.jpg"
            className="bguploadfile"
            alt="img"
            />
                <h1 className="uploadheader">ตัวอย่างไฟล์ในการอัพโหลด</h1>
                <br/>
                <br/>
                <h1 className="subject">KMITL EXIT EXAM</h1><br/>
                <img 
                className="centerimg"
                src="images/kexit score.png" 
                alt="KMITL EXIT EXAM"
                />  
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="subject">TOEIC</h1>
                <img
                className="centerimg"
                src="images/toeicscore.jpg"
                alt="TOEIC"
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="subject">CU-TEP</h1><br/>
                <img
                className="centerimg"
                src="images/cutepscore.jpg"
                alt="CU-TEP"
                />
                <br/>
                <br/>
                <br/>

            </div>
        </>
    )
}

export default UploadFile
