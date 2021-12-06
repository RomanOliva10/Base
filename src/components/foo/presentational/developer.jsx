import React, {Fragment} from "react";
//components
import {Fullstack, Front, Dev} from "./devs";


export default function Developer({role}){
    let fullstack = <Fullstack /> 
    let front = <Front />

    let profile = {
        fullstack,
        front 
    }[role];

    return (
        <Fragment>
         <div>=============================</div>
          {profile || <Dev />}
         <div>=============================</div>
        </Fragment>
      )
}
