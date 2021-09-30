import React, { Component } from 'react'
import axios from 'axios'


class addVaccine extends Component {

    constructor(props)
    {

        super(props)

        this.state={

            id:'',
            hospitalname:sessionStorage.getItem("name"),
            hid:sessionStorage.getItem("uid"),
            date:'',
            stime:'',
            etime:'',
            vcname:'',
            total:'',
            city:'',
            addr:''

        }
    }

    chnageText=e=>
    {
        this.setState({[e.target.name]:e.target.value});

    }

    submitform=e=>
    {
        e.preventDefault();

        axios.post("http://localhost:8080/api/vaccine/add",this.state)
        .then(Response=>{

            alert(Response.data);

            const data = {
                rid:sessionStorage.getItem("uid"),
                sid:'',
                date:new Date().toLocaleString(),
                msg:'Your New Slot Added',
                sname:'System',
                rname:sessionStorage.getItem("name")
            }

            console.log(data)
            axios.post("http://localhost:8080/api/notif/save",data)
            .then(Response=>{

                console.log("notification send")

            })
            .catch(error=>{
                console.log("Error Notification :"+error)
            })

        })
        .catch(error=>{

            alert("error to Save slot")

        })

        console.log(this.state);

    }

    render() {

        const {id,hospitalname,hid,date,stime,etime,vcname,total,city,addr} = this.state;

        return (

            <div>
               <div align="center">
                   <h3>Add Vaccine Slot</h3></div>
                   <hr/>
                   
                   <div>

                    <form onSubmit={this.submitform}> 

                        <table>
                            <tr>
                                <td> <label>Date:</label></td>
                                <td> <input type="date" name="date" id="date" placeholder="date" onChange={this.chnageText} required/></td>
                            </tr>

                            <tr>
                                <td><br/></td>
                            </tr>

                            <tr>
                                <td> <label>Start time</label></td>
                                <td> <input type="time" name="stime" id="stime" placeholder="start time" onChange={this.chnageText} required/></td>
                            </tr>

                            <tr>
                                <td><br/></td>
                            </tr>

                            <tr>
                                <td> <label>End Time</label> </td>
                                <td>  <input type="time" name="etime" id="etime" placeholder="end time" onChange={this.chnageText} required/></td>
                            </tr>

                            <tr>
                                <td><br/></td>
                            </tr>

                            <tr>
                                <td> <label>Vaccine Name</label> </td>
                                <td>  <input type="text" name="vcname" id="vcname" placeholder="Vaccine Name: Covin" onChange={this.chnageText} required/></td>
                            </tr>

                            <tr>
                                <td><br/></td>
                            </tr>

                            <tr>
                                <td><label>Addr:</label></td>
                              <td> <input type="text" name="addr" id="addr" placeholder="addr" onChange={this.chnageText} required/> </td>
                            </tr>


                            <tr>
                                <td><br/></td>
                            </tr>

                            <tr>
                                <td><label>city:</label></td>
                              <td> <input type="text" name="city" id="city" placeholder="city" onChange={this.chnageText} required/> </td>
                            </tr>

                           



                            <tr>
                                <td><br/></td>
                            </tr>

                            <tr>
                                <td><label>Total:</label></td>
                              <td> <input type="number" name="total" id="total" placeholder="total" onChange={this.chnageText} required/> </td>
                            </tr>

                            <tr>
                                <td><br/></td>
                            </tr>

                        </table>

                        <input type="submit" className="btn btn-success" value="Add Slot"/>

                    </form>

                   </div>
            </div>

            
                
            
        )

       


    }

    
    
}

export default  addVaccine;
