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
        <>
          {/* <h3>
            Name: {name}, DOB: {dob}, Gender: {gender}, Mobile: {mobile}
          </h3> */}

          <td>{name}</td>
          <td>{dob}</td>
          <td>{gender}</td>
          <td>{mobile}</td>
          <td>
            <button onClick={() => handleDel(id)}>Delete</button>
            <button onClick={() => updateData(id)}>Update</button>
          </td>
        </>
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
