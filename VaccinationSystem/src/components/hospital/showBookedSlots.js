import React, { Component } from 'react'
import axios from 'axios'

 class showBookedSlots extends Component {

    constructor(props)
    {
        super(props)

        this.state={

            slots:[]

        }

    }


    componentDidMount()
    {
        

        axios.get("http://localhost:8080/api/vaccine/hospital/slot/"+sessionStorage.getItem("uid"))
        .then(Response=>
            {

                //alert("working"+sessionStorage.getItem("uid"))
                this.setState({slots:Response.data});

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
            return(<div><button className="btn btn-danger">No</button></div>)
        }
        else
        {
            return(<div><button className="btn btn-success">Yes</button></div>)
        }
      

      
    }

    markTaken=(id,bookdate,city,date,hid,hname,sid,time,uid,vcname,uname)=>
    {

        const data ={
            id:id,
            bookdate:bookdate,
            city:city,
            date:date,
            hid:hid,
            hname:hname,
            sid:sid,
            taken:1,
            time:time,
            uid:uid,
            vcname:vcname,
            uname:uname


        }
        axios.post("http://localhost:8080/api/vaccine/slot/save",data)
        .then(Response=>{

            //alert("Marked As Taken")


            axios.get("http://localhost:8080/api/slotbook/chkby/"+uid)
            .then(Response=>{

                if(Response.data>=2)
                {
                    
           

            
            const data = {
                rid:uid,
                sid:sessionStorage.getItem("uid"),
                date:new Date().toLocaleString(),
                msg:'Your both vaccination is done. Ware Mask And stay safe',
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
                }
                else
                {
                    
           var nextDay= new Date(new Date().setDate(new Date().getDate()+30));
          
           var nextDate = nextDay;

            
            const data = {
                rid:uid,
                sid:sessionStorage.getItem("uid"),
                date:new Date().toLocaleString(),
                msg:'Your Vaccine Is Done. Take Care. And Do not forget to take next vaccine on: '+nextDate,
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
                }

            })
            .catch(error=>{
                alert("error to get Count :"+error)
            })



            this.setState({slots:[]})



            this.componentDidMount()

        })
        .catch(error=>{
            alert("Error To Mark Taken: "+error)
        })

        
       
    }

    markNotTaken=(id,bookdate,city,date,hid,hname,sid,time,uid,vcname,uname)=>
    {

        const data ={
            id:id,
            bookdate:bookdate,
            city:city,
            date:date,
            hid:hid,
            hname:hname,
            sid:sid,
            taken:0,
            time:time,
            uid:uid,
            vcname:vcname,
            uname:uname


        }
        axios.post("http://localhost:8080/api/vaccine/slot/save",data)
        .then(Response=>{

            //alert("Marked As Taken")


            

            this.setState({slots:[]})



            this.componentDidMount()

        })
        .catch(error=>{
            alert("Error To Mark Taken: "+error)
        })

        
       
    }

    checkAndMark=(id,bookdate,city,date,hid,hname,sid,time,uid,vcname,uname,ct)=>
    {

        if(ct!=1)
        {
            return( <button className="btn btn-success" onClick={()=>{this.markTaken(id,bookdate,city,date,hid,hname,sid,time,uid,vcname,uname)}}>Mark As Taken</button>)
    
        }
        else
        {
            return( <button className="btn btn-danger" onClick={()=>{this.markNotTaken(id,bookdate,city,date,hid,hname,sid,time,uid,vcname,uname)}}>Mark Not Taken</button>)
    
        }

        }


    render() {
        return (
            <div>

                <div>
                    <h3> Booked Slot</h3>
                </div>
                <hr/>
                <br/>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>User Name</td>
                            <td>Vccine Name</td>
                            <td>Book Date/Time</td>
                            <td>Date</td>
                            <td>Time</td>
                            <td>Taken</td>
                            <td>Option</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.slots.map(
                                slots=>
                                <tr key={slots.id}>
                                <td>{slots.uid}</td>
                                <td>{slots.uname}</td>
                                <td>{slots.vcname}</td>
                                <td>{slots.bookdate}</td>
                                <td>{slots.date}</td>
                                <td>{slots.time}</td>
                                <td>
                                    {
                                  this.checkTaken(slots.taken)
                                } 
                                 </td>

                                 <td>
                                     {
                                         this.checkAndMark(slots.id,slots.bookdate,slots.city,slots.date,slots.hid,slots.hname,slots.sid,slots.time,slots.uid,slots.vcname,slots.uname,slots.taken)
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


export default showBookedSlots;
