import React from "react";
import Type from "prop-types";
//components
import Developer from "./presentational/developer"


export default function Foo({email, name, role, pass}){ 

   return (
       <div>
          <h3>email</h3>
          <span>{email.toUpperCase()}</span>
          <h3>name</h3>
          <span>{name}</span>
          <h3>pass</h3>
          <span>{pass}</span>
          <h3>role</h3>
          <span><Developer role={role} /></span>
       </div>
   ) 
};


Foo.propTypes = {
  email:Type.string.isRequired,
  name: Type.string.isRequired,
  pass:Type.string.isRequired,
  role:Type.string.isRequired 
};