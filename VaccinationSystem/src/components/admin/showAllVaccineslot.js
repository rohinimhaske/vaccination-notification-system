import React, { Component } from 'react'
import axios from 'axios'

 class showAllVaccineslot extends Component {

    constructor(props)
    {
        super(props)

        this.state={

            slots:[]

        }

    }

    componentDidMount()
    {

        axios.get("http://localhost:8080/api/vaccine/slot/get")
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

    render() {
        return (
            <div>

                <div align="center">
                   <h3> Vaccines Slots </h3>
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
                                <td>Addr</td>
                                <td>City</td>
                                <td>Vaccine</td>
                                <td>Date</td>
                                <td>Start Time</td>
                                <td>End Time</td>
                                <td>Total</td>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.slots.map(
                                    slots=>
                                    <tr key={slots.id}>
                                        <td>{slots.id}</td>
                                        <td>{slots.hid}</td>
                                        <td>{slots.hospitalname}</td>
                                        <td>{slots.addr}</td>
                                        <td>{slots.city}</td>
                                        <td>{slots.vcname}</td>
                                        <td>{slots.date}</td>
                                        <td>{slots.stime}</td>
                                        <td>{slots.etime}</td>
                                        <td>{slots.total}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                
            </div>
        )
    }
}


export default showAllVaccineslot;
