import React, { Component } from 'react'
import axios from 'axios';

class showHospital extends Component {

    constructor(props)
    {
        super(props)

        this.state={

            users:[]

        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:8080/api/get/only/2")
        .then(Response=>{

            this.setState({users:Response.data})
        })
        .catch(error=>{
            alert("Error to Connect Server:"+error)
        })
    }


    deleteUser=(id)=>
    {
        axios.get("http://localhost:8080/api/user/delete/"+id)
        .then(Response=>{

            alert(Response.data)

           window.location.reload();

        })
        .catch(error=>{
            alert("error To Delete")
        })
    }

    render() {



        return (
            <div>
                <h3>Showing Hospital</h3>
                <hr/>
                <table className="table table-stiped">
                    <thead>
                        <tr>
                        <td>ID</td>
                        <td>name</td>
                        <td>gmail</td>
                        <td>Contact1 </td>
                        <td>Contact2</td>
                        <td>address</td>
                        <td>city</td>
                        <td>district</td>
                        <td>aadhar No</td>
                        <td>Bdate</td>
                        <td>Age</td>
                        <td>option</td>
                        </tr>

                    </thead>
                    <tbody>

                            {
                                this.state.users.map(

                                    user=>
                                    <tr key={user.id}>
                                      <td>{user.id}</td>
                                      <td>{user.name}</td>
                                      <td>{user.gmail}</td>
                                      <td>{user.mobo}</td>
                                      <td>{user.mobo2}</td>
                                      <td>{user.addr}</td>
                                      <td>{user.city}</td>
                                      <td>{user.district}</td>
                                      <td>{user.adno}</td>
                                      <td>{user.bdate}</td>
                                      <td>{user.age}</td>
                                      <td>
                                      <button className="btn btn-danger" onClick={()=>{this.deleteUser(user.id)}}>Delete</button>
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

export default showHospital;
