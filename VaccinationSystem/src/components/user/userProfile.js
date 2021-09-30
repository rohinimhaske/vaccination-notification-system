import React, { Component } from 'react'
import axios from 'axios'


class userProfile extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            id:'',
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
            type:'0'


        }

    }

   
   

    changeHandler= (e)=>
    {
       
        this.setState({[e.target.name]:e.target.value})

        this.setState({["id"]:sessionStorage.getItem("uid")})
    }


    
    el(name)
    {
       return document.getElementById(name).value;
    }

   loadState=()=>
   {

       //alert("working");
       this.setState({["name"]:this.el("name")});
       this.setState({["gmail"]:this.el("gmail")});
       this.setState({["password"]:this.el("pass1")});
       this.setState({["mobo"]:this.el("mobo1")});
       this.setState({["mobo2"]:this.el("mobo2")});
       this.setState({["addr"]:this.el("addr")});
       this.setState({["city"]:this.el("city")});
       this.setState({["district"]:this.el("district")});
       this.setState({["adno"]:this.el("adno")});
       this.setState({["bdate"]:this.el("bdate")});
       this.setState({["age"]:this.el("age")});

   }



    submitHandler = e =>
    {

        this.loadState();

        e.preventDefault();
        console.log("Clicked");

       

         this.setState({[e.target.name]:e.target.value})

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
            axios.put('http://localhost:8080/api/user/update',this.state)
            .then(Response=>{

                sessionStorage.setItem("name",Response.data["name"]) 
                sessionStorage.setItem("gmail",Response.data["gmail"]) 
                alert("updated")
                document.getElementById("loadingBar").style="display:none";

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


    
   
    


    render() {


        function LoadData()
        {

            axios.get('http://localhost:8080/auth/user/get/'+sessionStorage.getItem("uid"))
            .then(Response=>{

       sessionStorage.setItem("password",Response.data["password"]);
       sessionStorage.setItem("mobo",Response.data["mobo"]);
       sessionStorage.setItem("mobo2",Response.data["mobo2"]);
       sessionStorage.setItem("addr",Response.data["addr"]);
       sessionStorage.setItem("city",Response.data["city"]);
       sessionStorage.setItem("district",Response.data["district"]);
       sessionStorage.setItem("adno",Response.data["adno"]);
       sessionStorage.setItem("bdate",Response.data["bdate"]);
       sessionStorage.setItem("age",Response.data["age"]);

            }
            )
            .catch(error=>{

                alert("Error to load Data "+error);
            })
           
        }LoadData();
      

        var uname = sessionStorage.getItem("name");
        var ugmail= sessionStorage.getItem("gmail");
        var upassword= sessionStorage.getItem("password");
        var  umobo= sessionStorage.getItem("mobo");
        var umobo2= sessionStorage.getItem("mobo2");
        var uaddr= sessionStorage.getItem("addr");
        var ucity= sessionStorage.getItem("city");
        var udistrict= sessionStorage.getItem("district");
        var uadno= sessionStorage.getItem("adno");
        var  ubdate= sessionStorage.getItem("bdate");
        var  uage= sessionStorage.getItem("age");

     
        
       
       sessionStorage.setItem("password","");
       sessionStorage.setItem("mobo","");
       sessionStorage.setItem("mobo2","");
       sessionStorage.setItem("addr","");
       sessionStorage.setItem("city","");
       sessionStorage.setItem("district","");
       sessionStorage.setItem("adno","");
       sessionStorage.setItem("bdate","");
       sessionStorage.setItem("age","");

        const {name,gmail,password,mobo,mobo2,addr,city,district,adno,bdate,age} = this.state;

        return (
            <div>
                <h3>Profile</h3>
                
                <br/>
                <hr/>
                <br/>

                <div className="profilePanel">
                Enter All Data Again for update old data will shown in backside
                <form class="form1" onSubmit={this.submitHandler}>
                   
                <input class="pass" type="text" id= "name" name="name" align="center" placeholder="Name*" onChange={this.changeHandler}   defaultValue={uname} required/>
                    <input class="pass" type="email" id= "gmail" name="gmail" align="center" placeholder="Email*" onChange={this.changeHandler}   defaultValue={ugmail} required/>
                    <input class="pass" type="text" name="password" align="center" id="pass1" placeholder="Password*" onChange={this.changeHandler}  defaultValue={upassword} required/>
                    <input class="pass" type="text"  align="center" id="pass2" placeholder="Confirm Password*" required  defaultValue={upassword}/>
                    <input class="pass" type="number" id="mobo1" name="mobo" align="center" placeholder="Contact no*" onChange={this.changeHandler}  defaultValue={umobo} required/>
                    <input class="pass" type="number" id="mobo2" name="mobo2" align="center" placeholder="Contact no 2" onChange={this.changeHandler}  defaultValue={umobo2}/>
                    <input class="pass" type="text" id= "addr" name="addr" align="center" placeholder="Address*" onChange={this.changeHandler} defaultValue={uaddr} required/>
                    <input class="pass" type="text" id= "city" name="city" align="center" placeholder="City*" onChange={this.changeHandler}   defaultValue={ucity} required/>
                    <input class="pass" type="text" id= "district"name="district" align="center" placeholder="District*"  onChange={this.changeHandler}  defaultValue={udistrict} required/>
                    <input class="pass" type="number" id="adno" name="adno" align="center" placeholder="Adhar Number*" onChange={this.changeHandler}  defaultValue={uadno} required/>
                    <input class="pass" type="text" id= "bdate" name="bdate" align="center" placeholder="bday date*" onChange={this.changeHandler} required  defaultValue={ubdate}/>
                    <input class="pass" type="number" id= "age" name="age" align="center" placeholder="Age*" onChange={this.changeHandler}  defaultValue={uage} required/>
                    
                    <br/><br/>
                    <button class="submit" align="center">Update</button>
                    
                    <br/><br/>
                    </form>

                    </div>
                
            </div>

            
                
            
        )

       


    }

    
    
}

export default  userProfile;
