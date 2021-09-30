import React from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom'

import HomeCode from './components/homeCode';

import UserRegister from './components/user/UserRegister';
import UserLogin from './components/user/UserLogin';
import HospitalLogin from './components/hospital/HospitalLogin';
import HospitalRegister from './components/hospital/HospitalRegister';
import AdminLogin from './components/admin/AdminLogin';



function App () {
  return (

   

 <div className="App">

   

    <>
    <Switch>
    
    <Route path='/user/Register' component={UserRegister}/>
    <Route path='/user/Login' component={UserLogin}/>

    <Route path='/hospital/login' component={HospitalLogin}/>
    <Route path='/hospital/register' component={HospitalRegister}/>

    <Route path='/Admin/login' component={AdminLogin}/>

    <Route path='/' component={HomeCode}/>
   

    </Switch>
    </>

  
   </div>
  )  
}
export default App;
