import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionDeleteUser } from "../../redux/store";

const initFields = {
  email: ""
};

const DeleteBoot = () => {
  const [fields, setFields] = useState(initFields);
  const { email } = fields;

  const dispatch = useDispatch();

  const handle = (e) => {
    setFields({ email: e.target.value });
  };

  const fnDeleteUser = () => {
    dispatch(actionDeleteUser(email));
    alert("Deleting user..");
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
        <button onClick={fnDeleteUser}>Delete user</button>
      </section>
    </div>
  );
};

export default DeleteBoot;
