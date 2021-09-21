import React from 'react'

import './style/Request.css';
function Request() {
    return (
        <div className='text'>
            <h1>สำหรับนักศึกษาที่ต้องการยื่นคำร้อง</h1>
            <p>นักศึกษาที่ยังไม่มีผลสอบหรือยังสอบไม่ผ่านสามารถยื่นคำร้องและให้เหตุผลได้ที่นี่ !</p>
            <p><a
            class="btn btn-danger button"
            href={'//www.google.com'}
            target="_blank"
            >กดที่นี่เพื่อยื่นคำร้อง</a></p>         
            <div>
                <br/>
            </div>
         </div>
         
       
    )
}

export default Request
