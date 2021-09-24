import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ManageTips from './components/pages/ManageTips';
import Access from './components/Access';
import Ielts from './components/pages/Ielts';
import Form from './components/pages/Form';
import Login from './components/pages/Login';
import "firebase/auth";
import AdminApps from './components/pages/AdminApps';



function App() {

  return (
  <>
  <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tips' component={ManageTips} />
        <Route path="/form" component={Form} />
        <Route path='/access' component={Access} />
        <Route path='/ielts' component={Ielts} />
        <Route path='/login' component={Login} />
        <Route path='/adminlogin' component={AdminApps} />
      </Switch> 
  </Router>
  </>
  );
  }

export default App;

