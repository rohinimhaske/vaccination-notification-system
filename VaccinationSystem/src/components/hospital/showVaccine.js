import axios from 'axios';
import React, { Component } from 'react'


class showVaccine extends Component {
    constructor(props)
    {
        super(props);

        this.state={

            vaccine:[]
        }
    }

  
    

    componentDidMount()
    {

        axios.get("http://localhost:8080/api/vaccine/getmyslot/"+sessionStorage.getItem("uid"))
        .then(Response=>{

            if(Response.data!="")
            {
                this.setState({vaccine:Response.data});
            }

        })
        .catch(error=>{

            alert("Error To get Vaccine slot "+error)

        })
        

    }


    getCountslot(id,total)
    {
        axios.get("http://localhost:8080/api/slot/chk/"+id)
        .then(Response=>{

           var count = Object.keys(Response.data).length;

           var cc = total - count;

           document.getElementById("myslot_"+id).innerHTML=cc;
           //return({cc})



        })
        .catch(error=>{
               alert("Error To get Availabel Vaccine:"+error)
        })

        
    }


    render() {

       
    
        return (
            <div>
                <div align="center">
                   <h3> Show Vaccines Slots </h3>
                    </div>
                    <br/>
                    <hr/>

                    <br/>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Date</td>
                                <td>Vaccine Name</td>
                                <td>Start Time</td>
                                <td>End Time</td>
                                <td>Total</td>
                                <td>Available</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.vaccine.map(
                                    vaccines=>
                                    <tr key={vaccines.id}>
                                        <td>{vaccines.id}</td>
                                        <td>{vaccines.date}</td>
                                        <td>{vaccines.vcname}</td>
                                        <td>{vaccines.stime}</td>
                                        <td>{vaccines.etime}</td>
                                        <td>{vaccines.total}</td>
                                        <td>
                                            <div id={"myslot_"+vaccines.id}>
                                            {
                                               this.getCountslot(vaccines.id,vaccines.total)
                                            }
                                            </div>
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

export default showVaccine;
