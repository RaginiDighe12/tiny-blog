import React from "react";
import "./Login.css";
import {Link} from "react-router";
import {useState} from "react";
import axios from "axios";

function Login() {
  const [user, setUser]=useState({
    email:"",
    password:""
  });

  const loginUser = async()=>{
    try{
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login` , user);
    console.log(response.data);

  } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.status);
  console.log(error.response?.data);
}
   };

  
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>

        <input type="email" placeholder="Enter your email"  value={user.email}
         onChange={(e) => 
        setUser({...user , email:e.target.value})}/>
        <input type="password" placeholder="Enter your password" value={user.password}
         onChange={(e) => 
        setUser({...user , password:e.target.value})}/>
        
      

        <button onClick={loginUser}>Login</button>


        
        <p>Don't have an Account?{""}
            <Link to="/signup"><span style={{
      color: "#4f46e5",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "underline"
    }}>Signup</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Login;