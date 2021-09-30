import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PageUserProfile from './userProfile'
import PageBookVaccine from './bookVaccine'
import PageShowMySlot from './showMySlot'
import PageNotification from './notification'
import axios from 'axios'
class userHome extends Component {
    
    constructor(props)
    {
        super(props)

        this.state ={

            notifcount:0

        }
    }

        componentDidMount()
        {
            axios.get("http://localhost:8080/api/notif/count/get/"+sessionStorage.getItem("uid"))
            .then(Response=>
                {
                    //alert(Response.data)
                    this.setState({notifcount:Response.data});
                })
            .catch(error=>
                {
                    alert("Error To get Notification: "+error)
                })
        }


      

    render() {

        
      
        

        if(sessionStorage.getItem("loginType")!="user")
        {
            window.location.href = "/Auth/login";
        }
        else
        {

            
        function showProfile()
        {
            
                ReactDOM.render(

                    <PageUserProfile />,

                    document.getElementById("changePanel")
                );
        }

        function bookVaccine()
        {
                ReactDOM.render(

                    <PageBookVaccine />,

                    document.getElementById("changePanel")
                );
        }

        function showMySlot()
        {
                ReactDOM.render(

                    <PageShowMySlot />,

                    document.getElementById("changePanel")
                );
        }

        function adminLogout()
        {
            sessionStorage.clear();
            window.location.href = "/";
        }


        function notification()
        {
            ReactDOM.render(

                <PageNotification />,

                document.getElementById("changePanel")
            );
        }

       

            return (

               

                <div>
               
    
                <div className="top_nav primary" align="center">
                       User Panel
                    </div>
    
                    <div className="loading" id="loadingBar">
                    <div className="loading_bar">
                        <br/>
                        <hr/>
                        <br/>
                    <h3>Loading...</h3>
                    <br/>
                    <hr/>
                    
                    </div>
                   </div>
    
                   
                   <div align="center" className="mainPanel" id="mainPanel">
    
                        <div className="leftPanel">
                        <br/>
                            
                            <button className="BTN btn btn-primary"  onClick={()=>{showProfile()}}>Profile</button>

                            <button className="BTN btn btn-primary"  onClick={()=>{bookVaccine()}}>Book vaccine</button>

                            <button className="BTN btn btn-primary"  onClick={()=>{showMySlot()}}>My Slots</button>

                            <button className="BTN btn btn-primary"  onClick={()=>{notification()}}>{"Notification : "+this.state.notifcount}</button>
                            
                            <button className="BTN btn btn-danger"  onClick={()=>{adminLogout()}}>Logout</button>
                            
                            
    
                        </div>
    
                        <div className="rightPanel" id="changePanel">
                         <h3>User Panel</h3>
    
                        <br/>
    
                        <hr/>
                        <br/>
    
                        <div align="left">

                         <b>Profile</b>
                         <ul>
                             <li>User Name: <b>{sessionStorage.getItem("name")}</b></li>
                             <li>User Gmail <b>{sessionStorage.getItem("gmail")}</b></li>
                             <li>User Address: <b>{sessionStorage.getItem("addr")}</b></li>
                             <li>User city: <b>{sessionStorage.getItem("city")}</b></li>
                             </ul>
                         
                             <br/>

<b>Options</b>
<ul>
    <li>Edit Profile</li>
    <li>Search and book slot</li>
    <li>slot status</li>
    <li>Notification</li>
</ul>
                        </div>
                        
    
                        </div>
                       
                   </div>
                    
                </div>
            )
        }


       
    }
}


export default userHome;
