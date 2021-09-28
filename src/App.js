import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ManageTips from './components/pages/ManageTips';
import Access from './components/Access';
import Form from './components/pages/Form';
import Login from './components/pages/Login';
import "firebase/auth";
import AdminApps from './components/pages/AdminApps';
import RequestForm from './components/pages/RequestForm';


function App() {

  return (
  <>
   
  <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tips' component={ManageTips} />
        <Route path="/form" component={Form} />
        <Route path='/access' component={Access} />
        <Route path='/login' component={Login} />  
        <Route path='/requestform' component={RequestForm} />
        
      </Switch> 
      <Switch>
      <Route path='/adminlogin' exact component={AdminApps} />
      </Switch>
  </Router>
    </>
  );
  }

export default App;

