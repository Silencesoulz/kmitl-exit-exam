import React , { useEffect, useState }from 'react'
import CardItem from './CardItem';
import './style/Cards.css';
import firebase from '../config/firebase-config';

function Cards() {

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

    
         var provider = new firebase.auth.GoogleAuthProvider();
         provider.setCustomParameters({
             prompt: 'select_account',
             'hd': 'kmitl.ac.th'
         })

         function signInWithGooglePopup() {
            firebase.auth()
              .signInWithPopup(provider)
              .then((result) => {
                console.log('User has signed in.')
              }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(`Errors occurred during sign in:
                  ${errorCode}, ${errorMessage}, ${email}, ${credential}`)
              });
         }

    return (
        <section id ="Cards">
        <form action="/form" method="get">
        <div className ='cards' id='cards'>
            <br />
            <br />
            <br/>
            <h1>ประเภทของคะแนนสำหรับยื่นผ่าน Exit Exam</h1>
            <br />
            <div className="cards__container">
                <div className="cards__wrapper">
                
                { user ? (    <ul 
                className="cards__items"
                >
                        <CardItem 
                        src="images/KMITL EXIT EXAM.png"
                        text="ตั้งแต่ 32 คะแนนขึ้นไป "
                        label='KMITL EXIT EXAM'
                        path="/form"  
                        />
                        
                        </ul>
                ) : (
                    <ul className="cards__items" onClick={signInWithGooglePopup}>
                    <CardItem 
                    src="images/KMITL EXIT EXAM.png"
                    text="ตั้งแต่ 32 คะแนนขึ้นไป "
                    label='KMITL EXIT EXAM'
                    
                    />
                   
                    </ul>
                   
                )}
                      
                {user ? (
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
                        <CardItem 
                        src="images/toeic.png"
                        text="ตั้งแต่ 500 คะแนนขึ้นไป"
                        label='TOEIC'
                        path='/form'         
                        />  
                    </ul>
                ) : (
                    <ul className="cards__items" onClick={signInWithGooglePopup}>
                    <CardItem 
                    src="images/IELTS-4.png"
                    text="ตั้งแต่ระดับ Band 4 ขึ้นไป"
                    label='IELTS'
                                   
                    />
                    <CardItem 
                    src="images/TOEFL itp-2.jpg"
                    text="ตั้งแต่ 450 คะแนนขึ้นไป "
                    label='TOEFL (ITP)'
                                   
                    />
                    <CardItem 
                    src="images/TOEFL ibt.jpg"
                    text="ตั้งแต่ 45 คะแนนขึ้นไป"
                    label='TOEFL (iBT)'
                                  
                    />

                    <CardItem 
                      src="images/toeic.png"
                      text="ตั้งแต่ 500 คะแนนขึ้นไป"
                      label='TOEIC'
                                   
                    />  
                    
                </ul>
                )}
                { user ? (
                    <ul className="cards__items" >
                         <CardItem 
                        src="images/KMITL-TEP.png"
                        text="ตั้งแต่ระดับ B1 ขึ้นไป"
                        label='KMITL-TEP'
                        path='/form'           
                         />
                         <CardItem 
                        src="images/KMITL PLACEMENT TEST.png"
                        text="ตั้งแต่ระดับ B1 ขึ้นไป "
                        label='KMITL - TEP'
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
                        path='/form'
                        
                        />
                      
                        </ul>
                ) :  (
                    <ul className="cards__items" onClick={signInWithGooglePopup}>
                   <CardItem 
                        src="images/KMITL-TEP.png"
                        text="ตั้งแต่ระดับ B1 ขึ้นไป"
                        label='KMITL-TEP'
                                  
                   />

                   <CardItem 
                    src="images/KMITL PLACEMENT TEST.png"
                    text="ตั้งแต่ระดับ B1 ขึ้นไป "
                    label='KMITL Placement Test'
                   
                    />
                    <CardItem 
                    src="images/cu-tep.png"
                    text="ตั้งแต่ 45 คะแนนขึ้นไป"
                    label='CU - TEP'
                       
                    />
                    <CardItem 
                    src="images/tu-get.jpg"
                    text="ตั้งแต่ 500 คะแนนขึ้นไป "
                    label='TU - GET'
                    
                    />
                   
                    </ul>
                )}
                      
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
