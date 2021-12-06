import React from "react";
//mocks
import UsersMock from "../mocks/users_mocks";
//callbacks
import {cbUsersMap} from "../callbacks/users_map";


export default function ListUser(){
    return(
        <div>
            {UsersMock.map(cbUsersMap)}
        </div>
    )
};