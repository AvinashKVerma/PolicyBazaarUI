import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TermForm.css";

const TermForm = (props) => {
  const {
    iD,
    nam,
    gendr,
    doB,
    handleUpdate,
    handleSubmit,
    handleClick1,
    toggle,
  } = props;
  const [gender, setGender] = useState(gendr ? gendr : "");
  const [name, setName] = useState(nam ? nam : "");
  const [dateOfBirth, setDateOfBirth] = useState(doB ? doB : "");
  const [id] = useState(iD ? iD : uuidv4);

  const formSubmit = (e) => {
    e.preventDefault();
    if (!gender) {
      alert("Please select your gender");
      return;
    }
    if (!name) {
      alert("Name can not be empty");
      return;
    }
    if (!dateOfBirth) {
      alert("Date Of Birth can not be empty");
      return;
    } else {
      const formData = { id, gender, name, dateOfBirth };
      if (!nam) {
        handleSubmit(formData);
      } else {
        handleUpdate(formData);
        toggle();
      }
      setGender("");
      setName("");
      setDateOfBirth("");
    }
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={formSubmit}>
          <div className='formm'>
            <div className='radio-group'>
              <div>
                <label htmlFor='gender'>Gender:</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor='male'>Male</label>
              </div>

              <div>
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor='female'>Female</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='other'
                  name='gender'
                  value='other'
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor='other'>Other</label>
              </div>
            </div>
            <div className='inputField'>
              <label htmlFor='name'>Name :</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='inputField'>
              <label htmlFor='dob'>Date of Birth :</label>
              <input
                type='date'
                id='dob'
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className='btn'>
              <button type='submit'>Submit</button>
            </div>
            <div className='btn'>
              {!nam && (
                <button type='button' onClick={handleClick1}>
                  Show Data
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TermForm;
