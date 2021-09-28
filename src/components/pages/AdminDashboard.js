import React from 'react'
import { Card } from 'react-bootstrap';
import Clock from 'react-live-clock';

const AdminDashboard = ({handleLogout}, props) => {

   
    return (
        <section className="hero">
            <nav>  
            <h2>Welcome! </h2> 
            <Clock filter={date => date.replace('8', '7a')} format={'HH:mm:ss'} ticking={true} />

            <button onClick={handleLogout} type="button" className="buttonnaja">Logout</button>  
            </nav>
            <nav>
                <a 
                href="https://kmitlexitexam.retool.com/editor/KMITL%20EXIT%20EXAM%20Admin%20Panel"
                target="_blank"
                rel="noreferrer"
                >
                    Go to Firebase Admin Panel
                </a>
            
            </nav>
            <nav>
                <a
                href="https://console.firebase.google.com/u/0/project/my-exit-exam-react/overview"
                target="_blank"
                rel="noreferrer"
                >
                    Go to Firebase database
                </a>
            </nav>
        </section>
    )
}

export default AdminDashboard
