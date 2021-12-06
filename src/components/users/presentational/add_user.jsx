import React, {useState} from "react";
//mocks
import usersMock from "../mocks/users_mocks";


const user = {email:"", name:"", pass:""};


export default function AddUser(){
    const [fields, setFields] = useState(user);
    const {email, name, pass} = fields;

    const handleChange = (evt) =>{
        const {name, value} = evt.target;
        setFields({
            ...fields,
            [name]:value
        })
    }
    
    const fnCreateUser = () =>{
       usersMock.push(fields);
       alert("save...");
    }

    return(
        <div>
            <h1>add user</h1>
            <div>email: {email}</div>
            <div>
               <input placeholder="name@example.com" name="email" value={email} onChange={handleChange}/>
            </div>
            <div>
               <input placeholder="insert name" name="name" value={name} onChange={handleChange}/>
            </div>
            <div>
               <input placeholder="password" name="pass" value={pass} onChange={handleChange}/>
            </div>
            <div>
               <button onClick={fnCreateUser}>save</button>
            </div>
        </div>
    )
};