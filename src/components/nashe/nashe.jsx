import React, { useState } from "react";

const profiles = [{ name: "nashe", address: "anashe", planet: "un planeta" }];
const inputState = { name: "", address: "", planet: "" };

export default function Nashe() {
  let [data, setData] = useState(profiles);
  let [inputs, setInputs] = useState(inputState);

  let { name, address, planet } = inputs;

  const handle = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const cbData = (el, idx) => {
    return (
      <li
        key={idx}
      >{`[ PROFILE ]: ${el.name} - ${el.address} - ${el.planet}`}</li>
    );
  };

  const fnAdd = () => {
    setData([...data, inputs]);
    setInputs(inputState);
  };

  const fnDelete = () => {
    setData([...data.filter((element) => element.name !== name)]);
    setInputs(inputState);
  };

  const fnEdit = () => {
    setData([
      ...data.filter((element) => {
        if (element.name === name) {
          element.address = address;
          element.planet = planet;
        }
        return element;
      })
    ]);
  };

  const fnSearch = () => {
    data.filter((element) => {
      if (element.name === name) {
        setInputs({
          ...inputs,
          address: element.address,
          planet: element.planet
        });
      }
      return element;
    });
  };

  return (
    <div>
      <h1>Data</h1>
      {data.map(cbData)}
      <section>
        <input placeholder="name" name="name" value={name} onChange={handle} />
        <input
          placeholder="address"
          name="address"
          value={address}
          onChange={handle}
        />
        <input
          placeholder="planet"
          name="planet"
          value={planet}
          onChange={handle}
        />
        <button onClick={fnAdd}>Add</button>
        <button onClick={fnDelete}>Delete</button>
        <button onClick={fnEdit}>Edit</button>
        <button onClick={fnSearch}>Search</button>
      </section>
    </div>
  );
}