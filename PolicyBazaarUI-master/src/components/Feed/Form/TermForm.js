import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TermForm.css';

const TermForm = (props) => {
  const {
    iD,
    nam,
    gendr,
    doB,
    mob,
    handleUpdate,
    handleSubmit,
    handleClick1,
    toggle,
  } = props;
  const [gender, setGender] = useState(gendr ? gendr : '');
  const [name, setName] = useState(nam ? nam : '');
  const [dateOfBirth, setDateOfBirth] = useState(doB ? doB : '');
  const [id, setId] = useState(iD ? iD : uuidv4());
  const [mobile, setMobile] = useState(mob ? mob : '');

  const formSubmit = (e) => {
    e.preventDefault();
    if (!gender) {
      alert('Please select your gender');
      return;
    }
    if (!name) {
      alert('Name can not be empty');
      return;
    }
    if (!dateOfBirth) {
      alert('Date Of Birth can not be empty');
      return;
    } else {
      const formData = { id, gender, name, dateOfBirth, mobile };
      if (!nam) {
        handleSubmit(formData);
      } else {
        handleUpdate(formData);
        toggle();
      }
      setGender('');
      setName('');
      setDateOfBirth('');
      setMobile('');
      setId();
    }
  };

  return (
    <div className='containr'>
      {!nam && (
        <h1 className='formHeading'>
          ₹1 Crore &nbsp;{' '}
          <span className='span'> life cover starting at &nbsp;</span>
          ₹490/month<sup>+</sup>
        </h1>
      )}
      <div className='form-container'>
        <form
          className={nam && 'form_update'}
          onSubmit={formSubmit}>
          <div className='formm'>
            <div className='inputField'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Your Name'
              />
            </div>
            <div className='inputField'>
              <label htmlFor='dob'>Date of Birth</label>
              <input
                type='date'
                id='dob'
                value={dateOfBirth}
                required
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className='inputField'>
              <label html='phone'>Phone</label>
              <input
                placeholder='Enter Your Phone Number'
                type='tel'
                id='phone'
                name='phone'
                value={mobile}
                pattern='[0-9]{10}'
                required
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className='radio-group'>
              {/* <label htmlFor='gender'>Gender:</label> */}
              <div className='option'>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor='male'>Male</label>
              </div>

              <div className='option'>
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor='female'>Female</label>
              </div>
              <div className='option'>
                <input
                  type='radio'
                  id='other'
                  name='gender'
                  value='other'
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor='other'>Other</label>
              </div>
            </div>
            <div className='btn'>
              <button type='submit'>Submit</button>
            </div>
            <div className='btn'>
              {!nam && (
                <button
                  type='button'
                  onClick={handleClick1}>
                  Show Data
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TermForm;
