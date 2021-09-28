import React from 'react'
import CardItem from './CardItem';
import './style/Cards.css';


function Cards() {
    return (
        <section id ="Cards">
        <form action="/form" method="get">
        <div className ='cards' id='cards'>
            <br />
            <br />
            <h1>ประเภทของคะแนนสำหรับยื่นผ่าน Exit Exam</h1>
            <br />
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    
                        <CardItem 
                        src="images/KMITL.png"
                        text="ตั้งแต่ 32 คะแนนขึ้นไป "
                        label='KMITL EXIT EXAM'
                        path="/form"
                        scoretype="scoretype"
                        />
                        </ul>
                      
                    <ul className="cards__items">
                        <CardItem 
                        src="images/IELTS-4.png"
                        text="ตั้งแต่ระดับ Band 4 ขึ้นไป"
                        label='IELTS'
                        path='/form'               
                        />
                        <CardItem 
                        src="images/TOEFL itp-2.jpg"
                        text="ตั้งแต่ 450 คะแนนขึ้นไป "
                        label='TOEFL (ITP)'
                        path='/form'               
                        />
                        <CardItem 
                        src="images/TOEFL ibt.jpg"
                        text="ตั้งแต่ 45 คะแนนขึ้นไป"
                        label='TOEFL (iBT)'
                        path='/form'              
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/toeic.png"
                        text="ตั้งแต่ 500 คะแนนขึ้นไป"
                        label='TOEIC'
                        path='/form'               
                        />
                        <CardItem 
                        src="images/cu-tep.png"
                        text="ตั้งแต่ 45 คะแนนขึ้นไป"
                        label='CU - TEP'
                        path='/form'       
                        />
                        <CardItem 
                        src="images/tu-get.jpg"
                        text="ตั้งแต่ 500 คะแนนขึ้นไป "
                        label='TU - GET'
                        path='/tuget'
                        
                        />
                       <CardItem 
                        src="images/KMITL.png"
                        text="ตั้งแต่ระดับ B1 ขึ้นไป "
                        label='KMITL - TEP'
                        path='/form'
                        />
                        
                        </ul>
                      
                </div>
            </div> 
            <hr className="editbord">
            
            </hr>

        </div>
       </form>
    </section>
    )
}

export default Cards;
