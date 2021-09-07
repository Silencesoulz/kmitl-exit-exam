import React from 'react'
import CardItem from './CardItem';
import './style/Cards.css';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Cards() {
    return (
        <section id ="Cards">
        <div className ='cards' id='cards'>
            <br />
            <br />
            <h1>ประเภทของคะแนนสำหรับยื่นผ่าน Exit Exam</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    
                    <ul className="cards__items">
                        <CardItem 
                        src="images/KMITL.png"
                        text="ตั้งแต่ระดับ B1 ขึ้นไป "
                        label='KMITL - TEP'
                        />
                        </ul>
                      
                    <ul className="cards__items">
                        <CardItem 
                        src="images/IELTS-4.png"
                        text="ตั้งแต่ระดับ Band 4 ขึ้นไป"
                        label='IELTS'
                        path='/'               
                        />
                        <CardItem 
                        src="images/TOEFL itp-2.jpg"
                        text="ตั้งแต่ 450 คะแนนขึ้นไป "
                        label='TOEFL (ITP)'
                        path='/'               
                        />
                        <CardItem 
                        src="images/TOEFL ibt.jpg"
                        text="ตั้งแต่ 45 คะแนนขึ้นไป"
                        label='TOEFL (iBT)'
                        path='/'               
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/toeic.png"
                        text="ตั้งแต่ 500 คะแนนขึ้นไป"
                        label='TOEIC'
                        path='/'               
                        />
                        <CardItem 
                        src="images/cu-tep.png"
                        text="ตั้งแต่ 45 คะแนนขึ้นไป"
                        label='CU - TEP'
                        path='/'          
                        />
                        <CardItem 
                        src="images/tu-get.jpg"
                        text="ตั้งแต่ 500 คะแนนขึ้นไป "
                        label='TU - GET'
                        path='/'
                        />
                        </ul>
                </div>
            </div> 
        </div>
    </section>
    )
}

export default Cards;
