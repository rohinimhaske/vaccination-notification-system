import React, { Component } from 'react'
import axios from 'axios'

export default class showAllBookedSlot extends Component {

    constructor(props)
    {
        super(props)

        this.state={

            slots:[]

        }

    }

    componentDidMount()
    {

        axios.get("http://localhost:8080/api/vaccine/bookedslot/get")
        .then(Response=>{

            if(Response.data!="")
            {
                this.setState({slots:Response.data});
            }

        })
        .catch(error=>{

            alert("Error To get Vaccine slot "+error)

        })
        

    }

    checkTaken(taken)
    {
        if(taken==0)
        {
            return(<div><button className="btn btn-danger">Not Taken</button></div>)
        }
        else
        {
            return(<div><button className="btn btn-success">Taken</button></div>)
        }
      

      
    }



    render() {

       
        return (
            <div>

            <div align="center">
               <h3>Booked Vaccines Slots </h3>
                </div>
                <br/>
                <hr/>

                <br/>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Hid </td>
                            <td>hospital Name</td>
                            <td>uid</td>
                            <td>User Name</td>
                            <td>Addr</td>
                            <td>City</td>
                            <td>Vaccine</td>
                            <td>Date</td>
                            <td>Time</td>
                            <td>Booked date</td>
                            <td>Taken</td>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.slots.map(
                                slots=>
                                <tr key={slots.id}>
                                    <td>{slots.id}</td>
                                    <td>{slots.hid}</td>
                                    <td>{slots.hname}</td>
                                    <td>{slots.uid}</td>
                                    <td>{slots.uname}</td>
                                    <td>{slots.addr}</td>
                                    <td>{slots.city}</td>
                                    <td>{slots.vcname}</td>
                                    <td>{slots.date}</td>
                                    <td>{slots.time}</td>
                                    <td>{slots.bookdate}</td>
                                    <td>
                                {
                                  this.checkTaken(slots.taken)
                                }   </td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            
        </div>
        )
    }
}
