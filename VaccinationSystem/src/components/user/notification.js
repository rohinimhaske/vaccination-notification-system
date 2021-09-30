import React, { Component } from 'react'
import axios from 'axios'

class notification extends Component {

    constructor(props)
    {
        super(props)

        this.state={
            notification:[]
        }

    }

    componentDidMount()
    {

        axios.get("http://localhost:8080/api/notif/rid/"+sessionStorage.getItem("uid"))
        .then(Response=>{

                this.setState({notification:Response.data});

        })
        .catch(error=>{

            alert("Error To Get Notification: "+error)

        })

    }


    deleteNotif=(id)=>
    {
        alert("deleting")
        axios.get("http://localhost:8080/api/notif/delete/"+id)
        .then(Response=>{

            //alert("Deleted")
            this.componentDidMount();
            
        })
        .catch(error=>{
            alert("error to Delete Notification:"+error)
        })
    }

    render() {
        return (
            <div>

            <div>
                <h3> Notification</h3>
            </div>
            <hr/>
            <br/>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Sender</td>
                        <td>Message</td>
                        <td>Date</td>
                        <td>Option</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.notification.map(
                            notification=>
                            <tr key={notification.id}>
                            <td>{notification.sname}</td>
                            <td>{notification.msg}</td>
                            <td>{notification.date}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{this.deleteNotif(notification.id)}}>Delete</button>
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

export default notification;
