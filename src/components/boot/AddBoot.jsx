import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionAddUser } from "../../redux/store";

const initFields = {
  email: "",
  name: "",
  age: 0
};

const AddBoot = () => {
  const [fields, setFields] = useState(initFields);
  const { email, name, age } = fields;

  const dispatch = useDispatch();

  const handle = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  const fnAddUser = () => {
    dispatch(actionAddUser(email, name, age));
    alert("Adding user..");
  };
  return (
    <div>
      <section>
        <input
          placeholder="email"
          name="email"
          value={email}
          onChange={handle}
        />
      </section>
      <section>
        <input placeholder="name" name="name" value={name} onChange={handle} />
      </section>
      <section>
        <input placeholder="age" name="age" value={age} onChange={handle} />
      </section>
      <section>
        <button onClick={fnAddUser}>Add user</button>
      </section>
    </div>
  );
};

export default AddBoot;
