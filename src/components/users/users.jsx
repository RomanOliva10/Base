import React from "react";
import {Routes, Route, Link} from "react-router-dom";
//components
import AddUser from "./presentational/add_user";
import DeleteUser from "./presentational/delete_user";
import ListUser from "./presentational/list_users";


export default function Users(){
    return(
        <div>
          <ol>
            <li>
             <Link to="/">users</Link>
            </li>
            <li>
             <Link to="/add">add user</Link>
            </li>
            <li>
             <Link to="/delete">delete user</Link>
            </li>
           </ol> 
           <section>
               <Routes>
                   <Route index path="/" element={<ListUser/>}/>
                   <Route path="/add" element={<AddUser/>}/>
                   <Route path="/delete" element={<DeleteUser/>}/>
               </Routes>
           </section>
        </div>
    )
}
