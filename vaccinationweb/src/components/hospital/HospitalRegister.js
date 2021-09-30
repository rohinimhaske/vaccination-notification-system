import React from 'react'
import './css/hospital.css'

const HospitalRegister = () =>
{

    const register = () =>
    {
        alert("Register Process in Development");
    }

    return(

        <div>
        <div className="top_nav">
            <p> Vaccination Registration </p>
        </div>


        <div class="main_reg">
                <p class="sign" align="center">Hospital Register</p>
                <hr/>
                <form class="form1">
                <input class="un " type="text" align="center" placeholder="Name"/>
                <input class="un " type="email" align="center" placeholder="Email"/>
                <input class="un " type="email" align="center" placeholder="Hospital id"/>
                <input class="pass" type="password" align="center" placeholder="Password"/>
                <input class="pass" type="password" align="center" placeholder="Confirm Password"/>
                <input class="pass" type="number" align="center" placeholder="Contact no"/>
                <input class="pass" type="text" align="center" placeholder="Address"/>
                <input class="pass" type="text" align="center" placeholder="City"/>
                <input class="pass" type="text" align="center" placeholder="District"/>
                <input class="pass" type="text" align="center" placeholder="Adhar Number"/>
                <input class="un " type="email" align="center" placeholder="Website"/>
                
                <input type="reset" class="submit reset" align="center"/>
                <button class="submit" align="center" onClick={()=>{register()}}>Register</button>
                
                <br/><br/>
                </form>
                </div>

        
    </div>

    )

}


export default HospitalRegister;