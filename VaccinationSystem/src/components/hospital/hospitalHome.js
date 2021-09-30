import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PageProfileHospital from './profileHospital'
import PageAddVaccine from './addVaccine'
import PageShowVaccine from './showVaccine'
import PageShowBookedSlot from './showBookedSlots'
import PageNotification from './notification'
import axios from 'axios';


class hospitalHome extends Component {

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

        if(sessionStorage.getItem("loginType")!="hospital")
        {
            window.location.href = "/Auth/login";
        }
        else
        {

            function showProfile()
        {
                ReactDOM.render(

                    <PageProfileHospital />,

                    document.getElementById("changePanel")
                );
        }

        function addVaccine()
        {
                ReactDOM.render(

                   <PageAddVaccine />,

                    document.getElementById("changePanel")
                );
        }

        function showVaccine()
        {
                ReactDOM.render(


                    <PageShowVaccine />,
                    

                    document.getElementById("changePanel")
                );
        }

        function showBookedSlots()
        {
                ReactDOM.render(


                    <PageShowBookedSlot />,
                    

                    document.getElementById("changePanel")
                );
        }

        function showNotification()
        {
                ReactDOM.render(


                    <PageNotification />,
                    

                    document.getElementById("changePanel")
                );
        }


        function adminLogout()
        {
            sessionStorage.clear();
            window.location.href = "/";
        }


            return (
                <div>
               
    
                <div className="top_nav primary" align="center">
                       hospital Panel
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
                            <button className="BTN btn btn-primary"  onClick={()=>{addVaccine()}}>Add Vaccine Slot</button>
                            <button className="BTN btn btn-primary"  onClick={()=>{showVaccine()}}>Show Vaccine Slots</button>
                            <button className="BTN btn btn-primary"  onClick={()=>{showBookedSlots()}}>Show Booked Slots</button>
                            <button className="BTN btn btn-primary"  onClick={()=>{showNotification()}}>{"Notification : "+this.state.notifcount}</button>
                            <button className="BTN btn btn-danger"  onClick={()=>{adminLogout()}}>Logout</button>
                            
                            
    
                        </div>
    
                        <div className="rightPanel" id="changePanel">
                         <h3>hospital Panel</h3>
    
                        <br/>
    
                        <hr/>
                        <br/>

                        <div align="left">

                         <b>Profile</b>
                         <ul>
                             <li>hospital Name: <b>{sessionStorage.getItem("name")}</b></li>
                             <li> hospital Gmail <b>{sessionStorage.getItem("gmail")}</b></li>
                             <li> hospital Address: <b>{sessionStorage.getItem("addr")}</b></li>
                             <li>hospital city: <b>{sessionStorage.getItem("city")}</b></li>
                             </ul>
                         
                             <br/>

<b>Options</b>
<ul>
    <li>Edit Profile</li>
    <li>Add Vaccine Slot</li>
    <li>show bbooked Slot</li>
    <li>Mark as taken</li>
    <li>show notification</li>
</ul>
                        </div>

                        
    
                        </div>
                       
                   </div>
                    
                </div>
            )


        }


        
    }
}

export default hospitalHome;