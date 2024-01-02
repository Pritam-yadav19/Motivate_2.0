import React, { useState } from "react";
import "./css/Start.css";

import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Homepage = ()=>{
    const [Data,setData] = useState({
        name:'',
        email:'',
        password:''
    }
    );
    
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Name:", Data.name);
    console.log("Email:", Data.email);
    console.log("Password:", Data.password);
        axios.post('http://localhost:3001/', Data)
        .then(result => {
            console.log(result);
            // Navigate to '/Logins' on successful response
            navigate('/Logins');
        })
        .catch(err=> console.log(err))
    }

    return(
        <div className="flex items-center justify-center">
            <div>
                <p className="text-center">WELCOME! </p>
                <div className="mt-4">
                    <form className="text-center">
                        <div className="flex align-items-center justify-between mb-1">    {/**justify betw is for spacing both input tag and p tag vertically!!! */}
                            <p className="mr-2">Full Name:</p>
                            <input type="text" onChange={(e)=>setData({...Data, name: e.target.value})} className="border-2 border-black-100 rounded px-2 py-1" placeholder="type your name"/>
                        </div>
                        <div className="flex align-items-center justify-between mb-1">
                            <p className="mr-2">Email-Id:</p>
                            <input type="text" onChange={(e)=>setData({...Data, email: e.target.value})} className="border-2 border-black-100 rounded px-2 py-1" placeholder="type your email"/>
                        </div>
                        <div className="flex align-items-center justify-between mb-1">
                            <p className="mr-2">Password:</p>
                            <input type="text" onChange={(e)=>setData({...Data, password: e.target.value})} className="border-2 border-black-100 rounded px-2 py-1" placeholder="Password"/>
                        </div>
                        
                        <button onClick={handleSubmit} className="mt-4 border-2 border-black rounded px-2 py-1 bg-blue-400 hover:bg-blue-700 text-white font-bold">
                            REGISTER
                        </button>

                        
                    </form>
                    <div className="flex flex-col items-center mt-4">
                        <p className="mt-4 mb-3">If already registered, login below</p>
                        <Link to="/Logins"><button className="border-2 border-black rounded px-2">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;