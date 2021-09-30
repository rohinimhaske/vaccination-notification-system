import React, { Component } from 'react'
import '../css/home.css';




class HomeCode extends Component {

   
   
    render() {
        
       
        return (
            
        <div>
           

            <div className="top_nav" align="center">
                    Vaccination Booking
                </div>
               
               <div align="center" className="mainPanel">

                    <div className="leftPanel">
                    <br/>
                        
                        <button className="BTN"  onClick={()=>{window.location.href="/Auth/login"}}>Login</button>
                        <button className="BTN"  onClick={()=>{window.location.href="/Auth/Register"}}>Register</button>
                        

                    </div>

                    <div className="rightPanel">
                     <h3>Vaccination Booking System</h3>

                        <div align="left">

                                <br/><br/>

                                how to book Vaccine
                                 <ul>
                                     <li>Register As user</li>
                                     <li>Login into your account</li>
                                     <li>goto book slot</li>
                                     <li>search your city</li>
                                     <li>book vaccine</li>
                                     <li>you will recive notification of slot booking</li>
                                 </ul>   

                                 <br/> 

                                 how to Add Slot
                                 <ul>
                                     <li>Register As Hospital</li>
                                     <li>Login into your account</li>
                                     <li>goto Add slot</li>
                                     <li>Enter and submit Information</li>
                                     <li>your slot show in result</li>
                                     <li>you will recive notification of new slot</li>
                                 </ul> 

                                    <br/>
                                 <hr/>

                                   Project Information
                                 <ul>
                                     <li>name</li>
                                     <li>name</li>
                                     <li>Other..</li>
                        
                                 </ul>   
                                

                            </div>

                    </div>
                   
               </div>
                
            </div>
        )
    }
}

export default HomeCode;
