import React from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom'

import HomeCode from './components/homeCode';
import Login from './components/auth/Login';
import UserRegister from './components/auth/UserRegister';
import userHome from './components/user/userHome';
import adminHome from './components/admin/adminHome';
import hospitalHome from './components/hospital/hospitalHome';





function App () {
  return (

   

 <div className="App">

   

    <>
    <Switch>

    <Route path='/Auth/login' component={Login}/>
    <Route path='/Auth/Register' component={UserRegister}/>
    <Route path='/user' component={userHome}/>
    <Route path='/admin' component={adminHome}/>
    <Route path='/hospital' component={hospitalHome}/>

   

    <Route path='/' component={HomeCode}/>
   

    </Switch>
    </>

  
   </div>
  )  
}
export default App;
