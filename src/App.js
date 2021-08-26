import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Tips from './components/pages/Tips';
import SendScore from './components/pages/SendScore';
import Login from './components/pages/Login';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function App() {

  return (
  <>
  <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tips' component={Tips} />
        <Route path='/sendscore' component={SendScore} />
        <Route path='/login' component={Login} />
      </Switch> 
  </Router>
      
  </>
  );
  }

export default App;

