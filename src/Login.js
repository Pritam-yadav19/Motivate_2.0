import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = ()=>{
    const [Data,setData] = useState({
        email:'',
        password:''
    });
    
    const [Msg,setMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/Logins',Data)
        .then(result=>{
            console.log(result.data)
            if(result.data === "success!"){
                navigate('/Tasks')
            }
            if(result.data === "password incorrect"){
                setMsg(result.data)
            }
            if(result.data === "no record existed"){
                setMsg(result.data)
            }
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="flex items-center justify-center">
            <div className="mt-4">
                    <form className="text-center">                       
                        <div className="flex align-items-center justify-between mb-1">
                            <p className="mr-2">Email-Id:</p>
                            <input type="text" onChange={(e)=>setData({...Data, email:e.target.value})} className="border-2 border-black-100 rounded px-2 py-1" placeholder="type your email"/>
                        </div>                        
                        <div className="flex align-items-center justify-between mb-1">
                            <p className="mr-2">Password:</p>
                            <input type="text" onChange={(e)=>setData({...Data, password: e.target.value})} className="border-2 border-black-100 rounded px-2 py-1" placeholder="Password"/>
                        </div>       
                        {Msg && <p>{Msg}</p>}                
                        <button onClick={handleSubmit} className="mt-4 border-2 border-black rounded px-2 py-1 bg-blue-400 hover:bg-blue-700 text-white font-bold">LOGIN</button>
                                      
                        
                    </form>
                </div>
        </div>
    );
}

export default Login;