import React, { Component } from 'react'
import '../css/home.css';



class HomeCode extends Component {

   
    render() {
       

        function ShowLogin()
        {
            window.location.href="/user/Login";
        }

        function ShowRegistration()
        {
            window.location.href="/user/Register";
        }

        function ShowAdminLogin()
        {
            window.location.href="/Admin/login";
        }

        function ShowHospitalLogin()
        {
            window.location.href="/hospital/login";
        }

        function ShowHospitalRegister()
        {
            window.location.href="/hospital/register";
        }
        return (
            
        <div>
            <div className="top_nav" align="center">
                    Vaccination Slot Booking
                </div>
                <div className="marqu">
                    
                        <p>vaccination is completely safe || book your slot now || Register Your self and take vaccine</p>
                    
                </div>
                <div align="center">
                    <button className="btn_cls" onClick={()=>{ShowAdminLogin()}}>Admin Login</button>

                    <button className="btn_cls" onClick={()=>{ShowLogin()}}>Login User</button>
                    <button className="btn_cls" onClick={()=>{ShowRegistration()}}>Register User</button>

                    

                    <button className="btn_cls" onClick={()=>{ShowHospitalLogin()}}>Login Hospital</button>
                    <button className="btn_cls" onClick={()=>{ShowHospitalRegister()}}>Register Hospital</button>

                </div>
                
            </div>
        )
    }
}

export default HomeCode;
