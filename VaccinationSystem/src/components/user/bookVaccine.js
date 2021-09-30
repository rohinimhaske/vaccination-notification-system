import { queryAllByTestId } from '@testing-library/react';
import axios from 'axios';
import React, { Component } from 'react'

class bookVaccine extends Component {

    constructor(props)
    {
            super(props)

            this.state={
                users:[],
                vaccine:[],

            

                
            }

    }

    searchSlot=()=>
    {

        

         

         
    
        var city = document.getElementById("city").value;

        if(city=="")
        {
            alert("Enter City For search");
        }
        else
        {

       

        axios.get("http://localhost:8080/api/vaccine/slot/bycity/"+city)
        .then(Response=>{

           

            if(Object.keys(Response.data).length>0)
            {

                this.setState({vaccine:Response.data})
                

            }
            else
            {

                
                alert("No Slot found in this city");

            }
               

           
        })
        .catch(error=>{
            alert("Error To seach:"+error);
        })

    }

   


      
        
    }

    bookSlot=(uid,uname,hid,hname,vcname,date,time,city,taken,sid)=>
        {   

            axios.get("http://localhost:8080/api/slotbook/chkby/"+uid)
            .then(Response=>
                {
                    //alert(Response.data)
                    if(Response.data>=2)
                    {
                        alert("Your both Vaccination is Done. you can't book more slots");
                    }
                    else
                    {

                        const data = {
                            uid:uid,
                            sid:sid,
                            uname:uname,
                            hid:hid,
                            hname:hname,
                            vcname:vcname,
                            date:date,
                            time:time,
                            city:city,
                            taken:taken,
                            bookdate:new Date().toLocaleString()
            
                        }
            
                        
            
                         axios.post("http://localhost:8080/api/vaccine/slot/save",data)
                        .then(Response=>{
            
            
                            const data = {
                                rid:uid,
                                sid:sid,
                                date:new Date().toLocaleString(),
                                msg:'Slot Is booked',
                                sname:hname,
                                rname:uname
                            }
            
                            console.log(data)
                            axios.post("http://localhost:8080/api/notif/save",data)
                            .then(Response=>{
            
                                console.log("notification send")
            
                            })
                            .catch(error=>{
                                console.log("Error Notification :"+error)
                            })
            
            
                            const sdata = {
                                rid:hid,
                                sid:sid,
                                date:new Date().toLocaleString(),
                                msg: uname+'Booked Slot in your Hospital',
                                sname:hname,
                                rname:uname
                            }
            
                            console.log(data)
                            axios.post("http://localhost:8080/api/notif/save",sdata)
                            .then(Response=>{
            
                                console.log("notification send")
            
                            })
                            .catch(error=>{
                                console.log("Error Notification :"+error)
                            })
                            
            
            
            
            
            
            
            
            
                            
            
                            alert(Response.data)
            
            
                            
            
                        })
                        .catch(error=>{
                            alert("Error to Book slot");
                        })

                        

                    }
                    
                })
            .catch(error=>{
                alert("Error To check vaccine Status:"+error)
            })


            

            

           
        }


      
        getCountslot(id,total)
        {
            axios.get("http://localhost:8080/api/slot/chk/"+id)
            .then(Response=>{

               var count = Object.keys(Response.data).length;

               var cc = total - count;

                
               document.getElementById(id).innerHTML=cc;

               if(cc>0)
               {
                document.getElementById("booked_"+id).style="display:none";
                document.getElementById("booknow_"+id).style="display:block";
               }
               else
               {
                document.getElementById("booked_"+id).style="display:block";
                document.getElementById("booknow_"+id).style="display:none";
               }
                  
               
               //alert(count)

            })
            .catch(error=>{
                   alert("Error To get Availabel Vaccine:"+error)
            })

            
        }

    render() {

       
        
        return (
            <div>

                <div>
                    <h3>Book Vaccine</h3> 
                    <br/>
                    <hr/>

                    <table className="table_small">
                        <tbody>
                            <tr>
                                <td><label>Enter Your City:</label></td>
                                <td><input type="text" id="city" defaultValue={sessionStorage.getItem("city")} placeholder="Enter City"/></td>                     
                                <td><button className="btn btn-success" onClick={()=>{this.searchSlot()}}>Search Slot</button></td>
                            </tr>
                            
                        </tbody>
                        </table>
                        </div>    
            <br/>
            <hr/>
            <br/>
                        <div>
                            <h5>Vaccine Slots</h5>

                            <br/>

                            <table className="table table-striped">
                                <thead>
                                    <tr>

                                        <td>Slot ID</td>
                                        <td>hospital ID</td>
                                        <td>Name</td>
                                        <td>Vaccine Name</td>
                                        <td>Date</td>
                                        <td>Start Time</td>
                                        <td>End Time</td>
                                        <td>addr</td>
                                        <td>Total</td>
                                        <td>City</td>
                                        <td>Available</td>
                                        <td>Option</td>


                                    </tr>
                                </thead>
                                <tbody>

                                {/* var newdate = String(new Date().toLocaleString()).split(',');
                                                var onlydate = String(newdate[0]).split('/');

                                                var dbdate = String(data.date).split('-');
                                                if(dbdate[2]>=onlydate[0] && dbdate[1]>=onlydate[1] && dbdate[0]>=onlydate[2])
                                                {

                                                } */}


                                    {


                                        this.state.vaccine.map(

                                            data=>
                                            {
                                                var newdate = String(new Date().toLocaleString()).split(',');
                                                var onlydate = String(newdate[0]).split('/');

                                                if(onlydate[0]<10)
                                                {
                                                    var tempdate = onlydate[0];
                                                    onlydate[0] = 0+tempdate;
                                                }
                                                if(onlydate[1]<10)
                                                {
                                                    var tempdate = onlydate[2];
                                                    onlydate[1] = 0+tempdate;
                                                }
                                                
                                                var dbdate = String(data.date).split('-');

                                               
                                              
                                                if(dbdate[2]>=onlydate[1] && dbdate[1]>=onlydate[0] && dbdate[0]>=onlydate[2])
                                                {
                                                    return(
                                                        
                                                        <tr key={data.id}>

                                                        <td>{data.id}</td>
                                                        <td>{data.hid}</td>
                                                        <td>{data.hospitalname}</td>
                                                        <td>{data.vcname}</td>
                                                        <td>{data.date}</td>
                                                        <td>{data.stime}</td>
                                                        <td>{data.etime}</td>
                                                        <td>{data.addr}</td>
                                                        <td>{data.total}</td>
                                                        <td>{data.city}</td>
                                                        <td>
                                                            <p id={data.id}></p>
                                                            {
                                                               this.getCountslot(data.id,data.total)
                                                            }
                                                       </td>
                                                        <td> 
                                                            <button className="btn btn-danger" id={"booked_"+data.id}>All Booked</button>  
                                                           <button className="btn btn-success" id={"booknow_"+data.id} onClick={()=>{this.bookSlot(sessionStorage.getItem("uid"),sessionStorage.getItem("name"),data.hid,data.hospitalname,data.vcname,data.date,data.stime+"/"+data.etime,data.city,0,data.id)}}>Book</button>
                                                        </td>
       
                                                   </tr>
                                                    )
                                                }
                                           
                                            
                                            }
                                           

                                        )
                                    }

                                       

                                </tbody>
                            </table>
                        </div>






            </div>
        )
    }
}

export default  bookVaccine;
