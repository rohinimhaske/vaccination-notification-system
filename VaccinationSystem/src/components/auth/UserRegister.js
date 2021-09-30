import React, { Component } from 'react'
import './css/userlogin.css'
import axios from 'axios'
class UserRegister extends Component
{


    constructor(props)
    {
        super(props)

        this.state = {
            name : '',
            gmail:'',
            password:'',
            mobo:'',
            mobo2:'',
            addr:'',
            city:'',
            district:'',
            adno:'',
            bdate:'',
            age:'',
            type:''


        }

    }

  

    changeHandler= (e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    radiodata = e=>
    {
        var chk = document.querySelectorAll('input[name="logAs"]');
        var sel = "";

        for(const rb of chk)
        {
            if(rb.checked)
            {
                sel= rb.value;
                break;
            }
        }

        if(sel=="user")
        {
            document.getElementById("type").value ="1";
            this.setState({["type"]:"1"})
        }
        else
        {
            document.getElementById("type").value ="2";
            this.setState({["type"]:"2"})
        }

        

    }

    submitHandler = e =>
    {


        e.preventDefault();
        console.log("Clicked");

        var pass1 = document.getElementById("pass1").value;
        var pass2 = document.getElementById("pass2").value;

        
        var mobo1 = document.getElementById("mobo1");
        var mobo2 = document.getElementById("mobo2");

        var adno = document.getElementById("adno");

        if(pass1==pass2)
        {   

           
            if(document.getElementById("pass1").value.length<6)
            {
                alert("Your Password is to Short");
                return
            }

            if(mobo1.value.length<10)
            {
                alert("Invalid Mobile no 1:"+mobo1.length);
                
                return
            }

            if(mobo2.value.length>0)
                {
                    if(mobo2.value.length<10)
                    {
                        alert("Invalid Mobile no 2");
                        return
                    }
                }

                if(adno.value.length!=12)
                {
                    alert("Invalid Aadhar no:");
                    
                    return
                }

               
              
            
            console.log(this.state);

            document.getElementById("loadingBar").style="display:flex";
            axios.post('http://localhost:8080/api/user/add',this.state)
            .then(Response=>{

                alert(Response.data)
                document.getElementById("loadingBar").style="display:none";

                window.location.href = "/Auth/login";

            })
            .catch(error=>{
                document.getElementById("loadingBar").style="display:none";
                console.log("Request Error: "+error);
                alert("Error To Register User: "+error);
            })




        }
        else
        {
            alert("Password Not Match");
        }


        
    }

  

    render(){
        
        const {name,gmail,password,mobo,mobo2,addr,city,district,adno,bdate,age,type} = this.state;
     

        return(
            
            <div>
            <div className="top_nav">
                <p> Vaccination Registration </p>
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
    
    
            <div class="main_reg" >
                    <p class="sign" align="center">Register</p>
                    <hr/>
                    <form class="form1" onSubmit={this.submitHandler}>
                    <input class="pass " type="text" name="name" align="center" placeholder="Name*" onChange={this.changeHandler} required/>
                    <input class="pass" type="email" name="gmail" align="center" placeholder="Email*" onChange={this.changeHandler}  required/>
                    <input class="pass" type="password" name="password" align="center" id="pass1" placeholder="Password*" onChange={this.changeHandler} required/>
                    <input class="pass" type="password"  align="center" id="pass2" placeholder="Confirm Password*" required/>
                    <input class="pass" type="number" id="mobo1" name="mobo" align="center" placeholder="Contact no*" onChange={this.changeHandler} required/>
                    <input class="pass" type="number" id="mobo2" name="mobo2" align="center" placeholder="Contact no 2" onChange={this.changeHandler}/>
                    <input class="pass" type="text" name="addr" align="center" placeholder="Address*" onChange={this.changeHandler} required/>
                    <input class="pass" type="text" name="city" align="center" placeholder="City*" onChange={this.changeHandler} required/>
                    <input class="pass" type="text" name="district" align="center" placeholder="District*"  onChange={this.changeHandler} required/>
                    <input class="pass" type="number" id="adno" name="adno" align="center" placeholder="Adhar Number*" onChange={this.changeHandler} required/>
                    <input class="pass" type="date" name="bdate" align="center" placeholder="bday date*" onChange={this.changeHandler} required />
                    <input class="pass" type="number" name="age" align="center" placeholder="Age*" onChange={this.changeHandler} required/>
                    <input class="pass" type="hidden" name="type" id="type" align="center" placeholder="type" onChange={this.changeHandler}/>
                    <div>
                        <label>Register As:</label>
                        <br/>
                        <input type="radio"  id="LogAsuser" name="logAs" value="user" onChange={this.radiodata}/>
                        <label htmlFor="LogAsuser">User:</label>
                        <br/>
                        <input type="radio" id="LogAshospital" name="logAs" value="Hospital" onChange={this.radiodata}/>
                        <label htmlFor="LogAshospital">Hospital</label>
                    </div>
                    <br/><br/>
                    
                    <input type="reset" class="submit reset" align="center"/>
                    <button class="submit" align="center">Register</button>
                    
                    <br/><br/>
                    </form>
                    </div>
    
            
        </div>
    
        )

    }

}


export default UserRegister;