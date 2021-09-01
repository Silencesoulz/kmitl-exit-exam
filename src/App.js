import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Tips from './components/pages/Tips';
import Login from './components/pages/Login';
import firebase from 'firebase/app';
import 'firebase/auth';
import Access from './components/Access';
import Ielts from './components/pages/Ielts';
import Form from './components/pages/Form';


function App() {
  
  return (
  <>
  <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tips' component={Tips} />
        <Route path='/sendscore' component={Form} />
        <Route path='/login' component={Login} />
        <Route path='/access' component={Access} />
        <Route path='/ielts' component={Ielts} />
      </Switch> 
  </Router>
      
  </>
  );
  }

export default App;

