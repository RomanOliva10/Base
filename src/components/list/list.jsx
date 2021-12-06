import React from "react";
//mocks
import data from "./mocks/fake_mock";
//callbacks
import {cbList, cbPair} from "./callbacks/map_callbacks";
//style
import "./styles/list.css"


const List = () =>{
  return(
    <div className="bg">
      <p>======================</p>
      <h1>list</h1>
      {data.map(cbList)}
      <p>======================</p>
      <h1>odd / even</h1>
      {data.map(cbPair)}
      <p>======================</p>
    </div>
  )
}

export default  List;