import React, { useState } from "react";
import TermForm from "./TermForm";

const ShowForm = (props) => {
  const [update, setUpdate] = useState(false);
  const { id, name, dob, gender, handleDel, handleUpdate, handleClick1 } =
    props;

  const updateData = (id) => {
    setUpdate(!update);
  };
  const toggle = () => setUpdate(!update);
  return (
    <>
      {!update ? (
        <h3>
          Name: {name}, DOB: {dob}, Gender: {gender}
          <button onClick={() => handleDel(id)}>delete</button>
          <button onClick={() => updateData(id)}>Update</button>
        </h3>
      ) : (
        <>
          <TermForm
          iD={id}
            nam={name}
            gendr={gender}
            doB={dob}
            handleUpdate={handleUpdate}
            handleClick1={handleClick1}
            toggle={toggle}
          />
        </>
      )}
    </>
  );
};

export default ShowForm;
