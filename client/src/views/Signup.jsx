import React from "react";
import "./Signup.css";
import {Link} from "react-router";
import {useState} from "react";
import axios from "axios";

function Signup() {

    const [user , setUser] =useState({
        name:"",
        email:"",
        password:"",

    });

    const signupUser = async()=>{
        const response= await axios.post(`${import.meta.env.VITE_API_URL}/signup` , user);

        console.log(response.data);
    };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Sign Up</h1>

        <input type="text" placeholder="Enter your name"   value={user.name} 
        onChange={(e) =>
         {setUser({...user , name: e.target.value})}} />


        <input type="email" placeholder="Enter your email"  value={user.email}
        onChange={(e) => 
        {setUser({...user , email:e.target.value})}}/>


        <input type="password" placeholder="Enter your password" value={user.password} 
        onChange={(e) => 
        setUser({...user , password:e.target.value})}/>

        <button onClick={signupUser}>Sign Up</button>


         <p>Already have an Account?{""}
            <Link to="/login"><span style={{
      color: "#4f46e5",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "underline"
    }}>Login</span></Link>
        </p>

        
      </div>
    </div>
  );
}

export default Signup;