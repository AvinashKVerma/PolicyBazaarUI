import React, { useState } from 'react';
import TermForm from './TermForm';

const ShowForm = (props) => {
  const [update, setUpdate] = useState(false);
  const {
    id,
    name,
    dob,
    gender,
    handleDel,
    mobile,
    handleUpdate,
    handleClick1,
  } = props;

  const updateData = (id) => {
    setUpdate(!update);
  };
  const toggle = () => setUpdate(!update);
  return (
    <>
      {!update ? (
        <h3>
          Name: {name}, DOB: {dob}, Gender: {gender}, Mobile: {mobile}
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
            mob={mobile}
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
