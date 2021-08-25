import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Tips from './components/pages/Tips';
import Cards from './components/Cards';
import SendScore from './components/pages/SendScore';
import firebase from './config/firebase-config';
import { useState, useEffect } from 'react';



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
  firebase.auth().onAuthStateChanged(user => {
      setUser(user)
     })
  }, []);

  console.log(user);

  return (
  <>
  <Router>
      
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tips' component={Tips} />
        <Route path='/sendscore' component={SendScore} /> 
        {user ? <Home user={user}/> : <Home />}
      </Switch> 
      
  </Router>
      
  </>
  );
}

export default App;
