import React, {useState} from "react";
//mocks
import usersMock from "../mocks/users_mocks";


export default function DeleteUser(){
    let [email, setEmail] = useState(""); 

    const handleChange = (evt) =>{
        setEmail(evt.target.value)
    }

    const fnDeleteUser = () =>{
        let len = usersMock.length;
        let i = 0;

        for(; i < len ;i++){
            if(usersMock[i].email == email){
                delete usersMock[i];
            }
        }
       
        alert("user delete :X ");
    }

    return(
        <div>
            <h1>delete user</h1>
            <br/>
            <input value={email} onChange={handleChange}/> 
            <br/>
            <br/>
            <button onClick={fnDeleteUser}>delete</button>
        </div>
    )
};