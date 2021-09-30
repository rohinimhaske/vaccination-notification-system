import axios from 'axios'
import { Alert } from 'bootstrap'
import React, { Component } from 'react'
import './css/userlogin.css'


class Login extends Component {

    constructor(props)
    {
        super(props)

        this.state = {

            username:'',
            password:''

        }
    }

    formHandaling=e=>
    {
        e.preventDefault();
        document.getElementById("loadingBar").style='display:flex';

        axios.get('http://localhost:8080/api/add/login/'+this.state.username+'/'+this.state.password)
        .then(Response=>{

            document.getElementById("loadingBar").style='display:none';

            console.log(Response.data)

            if(Object.keys(Response.data).length>0)
            {
                
                if(Response.data[0]["type"]=="0")
                                {
                                  sessionStorage.setItem("loginType","admin");
                                }
            
                                if(Response.data[0]["type"]=="1")
                                {
                                    sessionStorage.setItem("loginType","user");
                                }
            
                                if(Response.data[0]["type"]=="2")
                                {
                                    sessionStorage.setItem("loginType","hospital");
                                }
            
                                sessionStorage.setItem("uid",Response.data[0]["id"]);
                                sessionStorage.setItem("gmail",Response.data[0]["gmail"]);
                                sessionStorage.setItem("name",Response.data[0]["name"]);
                                sessionStorage.setItem("city",Response.data[0]["city"]);
                                sessionStorage.setItem("district",Response.data[0]["district"]);
                                sessionStorage.setItem("addr",Response.data[0]["addr"]);
            
                                if(sessionStorage.getItem("loginType")=="admin")
                                {
                                        window.location.href = "/admin";
                                }
                                if(sessionStorage.getItem("loginType")=="user")
                                {
                                    window.location.href = "/user";
                                }
                                if(sessionStorage.getItem("loginType")=="hospital")
                                {
                                    window.location.href = "/hospital";
                                }

            }
            else
            {
                alert("User Not Found")
            }


        })
        .catch(error=>{
            document.getElementById("loadingBar").style='display:none';
            alert("Problem To connect Server error:"+error);
        })
        
    }


    // formHandaling=e=>
    // {
    //     e.preventDefault();
        
    //    document.getElementById("loadingBar").style='display:flex';

    //     axios.get('http://localhost:8080/api/user/login/'+this.state.username+'/'+this.state.password)
    //     .then(Response=>{
    //         if(Response.data != "notFound")
    //         { 
    //             sessionStorage.setItem("uid",Response.data);
    //             axios.get('http://localhost:8080/auth/user/get/'+Response.data)
    //             .then(Response=>{

    //                 document.getElementById("loadingBar").style='display:none';

    //                 if(Response.data["type"]=="0")
    //                 {
    //                   sessionStorage.setItem("loginType","admin");
    //                 }

    //                 if(Response.data["type"]=="1")
    //                 {
    //                     sessionStorage.setItem("loginType","user");
    //                 }

    //                 if(Response.data["type"]=="2")
    //                 {
    //                     sessionStorage.setItem("loginType","hospital");
    //                 }

                    
    //                 sessionStorage.setItem("gmail",Response.data["gmail"]);
    //                 sessionStorage.setItem("name",Response.data["name"]);
    //                 sessionStorage.setItem("city",Response.data["city"]);
    //                 sessionStorage.setItem("district",Response.data["district"]);
    //                 sessionStorage.setItem("addr",Response.data["addr"]);

    //                 if(sessionStorage.getItem("loginType")=="admin")
    //                 {
    //                         window.location.href = "/admin";
    //                 }
    //                 if(sessionStorage.getItem("loginType")=="user")
    //                 {
    //                     window.location.href = "/user";
    //                 }
    //                 if(sessionStorage.getItem("loginType")=="hospital")
    //                 {
    //                     window.location.href = "/hospital";
    //                 }


    //             })
    //             .catch(error=>{
    //                 alert("Someting Went Wrong");
    //                 document.getElementById("loadingBar").style='display:none';
    //             })
    //         }
    //         else
    //         {
    //             document.getElementById("loadingBar").style='display:none';
    //             alert("no User Found");
    //         }
    //     })
    //     .catch(error=>{

    //         alert("Login Error"+error);
    //     })

        

    // }

    changeHandle=e=>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        const {username,password} = this.state;
        return (
           
            <div>
                <div className="top_nav">
                    <p> Vaccination Login </p>
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

                <div class="main_reg">
                <p class="sign" align="center">Login</p>
                <hr/>
                <form class="form1" onSubmit={this.formHandaling}>
                <input class="pass" type="email" name="username" align="center" placeholder="Email" required onChange={this.changeHandle}/>
                <input class="pass" type="password" name="password" align="center" placeholder="Password" required onChange={this.changeHandle}/>
                
                <button class="submit" align="center">Login</button>
                
                <br/><br/>
                </form>
                </div>

                
            </div>
        )
    }
}

export default Login;
