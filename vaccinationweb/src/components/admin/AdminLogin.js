import React, { Component } from 'react'
import './css/AdminLogin.css'

class AdminLogin extends Component {
    render() {
        return (
            <div>
                <div className="top_nav">
                    <p> Vaccination Login </p>
                </div>

                <div class="main">
                <p class="sign" align="center">Admin Login</p>
                <form class="form1">
                <input class="un " type="text" align="center" placeholder="Username"/>
                <input class="pass" type="password" align="center" placeholder="Password"/>
                <button class="submit" align="center">Sign in</button>
                <p class="forgot" align="center">Forgot Password?</p>
                </form>
                </div>
            
            
                
            </div>
        )
    }
}

export default AdminLogin;
