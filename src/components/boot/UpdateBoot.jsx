import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionUpdateUser } from "../../redux/store";

const initFields = {
  email: "",
  name: "",
  age: 0
};

const UpdateBoot = () => {
  const [fields, setFields] = useState(initFields);
  const { email, name, age } = fields;

  const dispatch = useDispatch();

  const handle = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  const fnUpdateUser = () => {
    dispatch(actionUpdateUser(email, name, age));
    alert("Edit user..");
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
        <button onClick={fnUpdateUser}>Edit User</button>
      </section>
    </div>
  );
};

export default UpdateBoot;
