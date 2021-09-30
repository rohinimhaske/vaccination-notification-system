import React, { Component } from 'react'
import axios from 'axios';

class showMySlot extends Component {

    constructor(props)
    {
        super(props);

        this.state = {

            slot:[]

        }
    }


    componentDidMount()
    {
        

        axios.get("http://localhost:8080/api/vaccine/user/slot/"+sessionStorage.getItem("uid"))
        .then(Response=>
            {

                //alert("working"+sessionStorage.getItem("uid"))
                this.setState({slot:Response.data});

               // console.log(this.state.slot)

                
            })
        .catch(error=>{
            alert("Error To get Slot :"+error)
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

                <div>
                    <h3> My Vaccine Slot</h3>
                </div>
                <hr/>
                <br/>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Hospital Name</td>
                            <td>Vccine Name</td>
                            <td>Book Date/Time</td>
                            <td>Date</td>
                            <td>Time</td>
                            <td>Taken</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.slot.map(
                                slots=>
                                <tr key={slots.id}>
                                <td>{slots.id}</td>
                                <td>{slots.hname}</td>
                                <td>{slots.vcname}</td>
                                <td>{slots.bookdate}</td>
                                <td>{slots.date}</td>
                                <td>{slots.time}</td>
                                <td>
                                {
                                  this.checkTaken(slots.taken)
                                }    
                                </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
                
            </div>
        )
    }
}


export default showMySlot;
