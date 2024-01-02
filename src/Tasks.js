import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { display } from "./redux/reducer";
import store from "./redux/store";
import { Link } from "react-router-dom";

const Tasks=()=>{
    const [Task,setTask] = useState("");
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();     //for preventing tag "form" to refresh auto matically, and keep the task value!!
        if(Task){
            dispatch(display(Task));
        setTask("");
        }
        
    };

    
    const count = useSelector(store.getState)
    // console.log(count.task.firsts)
    
    return(
        <div>
            <div>
                <div className="flex items-center justify-center">
                    <div className="flex">
                        <form className="flex">
                            <p className="mr-2">Enter task:</p>
                            {/**when we use arrow func we guarantee it will run whne button is cliked instead of rendering it.!! */}
                            <input type="text" value={Task} onChange={(e)=>setTask(e.target.value)} className="border-2 border-black rounded px-2"/>
                            <button className="ml-2 border-2 border-black rounded px-2" onClick={handleAdd}>ADD</button>  
                                    
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex mt-4 items-center justify-center">
                <p>Completed task are-</p>
            </div>
            <div className="flex mt-4 items-center justify-center">
                <div style={{width: "300px"}}>
                    {count.task.firsts.map((i, index)=>{
                        return(
                            
                            <p key={index} style={{ wordWrap:"break-word"}}>- {i}</p>
                        );
                    })}
                </div>
            </div>
            <div className="flex mt-4 items-center justify-center">
                <Link to="/Quotes"><button className="border-2 border-black rounded px-2 hover:bg-blue-100">Get Motivation!</button></Link>
            </div>
        </div>
    );
}

export default Tasks;

