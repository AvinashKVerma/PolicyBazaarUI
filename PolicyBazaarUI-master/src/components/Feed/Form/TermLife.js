import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TermForm from './TermForm';
import ShowForm from './ShowForm';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './TermLife.css';

const TermLife = () => {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:3005/testdata')
      .then((response) => {
        setData(response.data); // Assuming the server returns an array
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSubmit = (e) => {
    // console.log(e);
    axios
      .post('http://localhost:3005/users', e)
      .then((response) => {
        fetchData(); // Fetch updated data after successful POST
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDel = (itemId) => {
    const confirmRemove = window.confirm('Are you sure?');
    if (confirmRemove) {
      axios
        .delete(`http://localhost:3005/delete/${itemId}`)
        .then(() => {
          fetchData(); // Fetch updated data after successful DELETE
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const handleClick1 = () => {
    setShow(!show);
    axios
      .get('http://localhost:3005/testdata')
      .then((response) => {
        const result = response.data;
        setData(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleUpdate = (ele) => {
    setUpdate(!update);
    const updatedData = {
      id: ele.id,
      name: ele.name,
      gender: ele.gender,
      dob: ele.dateOfBirth,
      mobile: ele.mobile,
    };
    axios
      .put(`http://localhost:3005/update/${ele.id}`, updatedData)
      .then((response) => {
        console.log('User updated successfully:', response.data);
        fetchData(); // Fetch updated data after successful update
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <>
      {!show ? (
        <>
          <Navbar />

          <div className='form-container'>
            <div className='left-side'>
              <Sidebar />
            </div>
            <div className='right-side'>
              <TermForm
                handleSubmit={handleSubmit}
                handleClick1={handleClick1}
              />
            </div>
          </div>
          <div className='footttr'>
            <Footer />
          </div>
        </>
      ) : (
        <>
          <div className='footerr'>
            <div className='navvv'>
              <Navbar />
            </div>
            <div className='dataShow'>
              <table className='data-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date Of Birth</th>
                    <th>Gender</th>
                    <th>Mobile Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((ele, index) => (
                    <tr
                      key={ele.id}
                      className={index % 2 === 0 ? 'odd' : 'even'}>
                      <ShowForm
                        id={ele.id}
                        name={ele.name}
                        gender={ele.gender}
                        dob={ele.dob}
                        mobile={ele.mobile}
                        handleDel={handleDel}
                        handleUpdate={handleUpdate}
                        handleSubmit={handleSubmit}
                        handleClick1={handleClick1}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='backbtn'>
                <button onClick={() => setShow(false)}>Back</button>
              </div>
            </div>
            <Footer show={show} />
          </div>
        </>
      )}
    </>
  );
};

export default TermLife;
