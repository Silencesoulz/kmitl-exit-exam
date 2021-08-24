import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Tips from './components/pages/Tips';
import Cards from './components/Cards';
import ScrollToTop from './components/ScrollToTop';
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
        <Route path='/sendscore' component={SendScore} />
        <Route path='/signup' component={SignUp} />
        {user ? <Home user={user}/> : <Home />}
        <Route path='/tips' component={Tips} />
      </Switch> 

  </Router>
  </>
  );
}

export default App;
