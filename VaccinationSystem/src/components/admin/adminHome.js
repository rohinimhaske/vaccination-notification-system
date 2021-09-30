import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Pageprofile from './profile'
import PageshowUsers from './showUsers'
import PageshowHospital from './showHospital'
import PageShowAllVaccineSlot from './showAllVaccineslot'
import PageShowAllBookedVaccineSlot from './showAllBookedSlot'
import './Admincss.css'



class adminHome extends Component {

    
    
    render() {

        if(sessionStorage.getItem("loginType")!="admin")
        {
            
            window.location.href = "/Auth/login";
            
        }
        else
        {

        

        function showProfile()
        {
                ReactDOM.render(

                    <Pageprofile />,

                    document.getElementById("changePanel")
                );
        }

        function showUsers()
        {
                ReactDOM.render(

                    <PageshowUsers />,

                    document.getElementById("changePanel")
                );
        }

        function showHospital()
        {
                ReactDOM.render(

                    <PageshowHospital />,

                    document.getElementById("changePanel")
                );
        }

        function showAllVaccineSlot()
        {
                ReactDOM.render(

                    <PageShowAllVaccineSlot />,

                    document.getElementById("changePanel")
                );
        }

        function showAllbookedSlot()
        {
                ReactDOM.render(

                    <PageShowAllBookedVaccineSlot />,

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
           

            <div className="top_nav" align="center">
                   Admin Panel
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
                        <button className="BTN btn btn-primary"  onClick={()=>{showUsers()}}>Show Users</button>
                        <button className="BTN btn btn-primary"  onClick={()=>{showHospital()}}>Show hospital</button>
                        <button className="BTN btn btn-primary"  onClick={()=>{showAllVaccineSlot()}}>Vaccine Slots</button>
                        <button className="BTN btn btn-primary"  onClick={()=>{showAllbookedSlot()}}>Booked Vaccine</button>
                        <button className="BTN btn btn-danger"  onClick={()=>{adminLogout()}}>Logout</button>
                        
                        

                    </div>

                    <div className="rightPanel" id="changePanel">
                     <h3>Admin Panel</h3>

                    <br/>

                    <hr/>
                    <br/>

                    <div align="left">

                    <div align="left">

<b>Profile</b>
<ul>
    <li>Admin Name: <b>{sessionStorage.getItem("name")}</b></li>
    <li>Admin Gmail <b>{sessionStorage.getItem("gmail")}</b></li>
    <li>Admin Address: <b>{sessionStorage.getItem("addr")}</b></li>
    <li>Admin city: <b>{sessionStorage.getItem("city")}</b></li>
    </ul>

    <br/>

<b>Options</b>
<ul>
<li>Edit Profile</li>
<li>Show All users</li>
<li>Delete Users</li>
<li>show hospital</li>
<li>delete hospital</li>
<li>vaccine slot</li>
<li>booked slot</li>
</ul>
</div>

                    </div>
                    

                    </div>
                   
               </div>
                
            </div>
        )

    }
    }
}

export default adminHome;
