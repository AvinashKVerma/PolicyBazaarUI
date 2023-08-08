import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const TermLife = () => {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState(uuidv4());

  useEffect(() => {
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        const result = response.data;
        setData(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { id, gender, name, dateOfBirth };
    // console.log(formData);
    axios
      .post("http://localhost:3033/api/tasks", formData)
      .then((response) => {
        const result = response.data;
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleClick1 = () => {
    setShow(!show);
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        const result = response.data;
        setData(result);
        console.log("Test", data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleClick2 = () => {
    setShow(!show);
  };

  const handleDel = (ele) => {
    console.log(ele);
    // axios
    //   .delete(`http://localhost:3033/api/tasks:${ele}`)
    //   .then((response) => {
    //     const result = response.data;
    //     setData(result);
    //     console.log("Test", data);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
    const confirmRemove = window.confirm("Are you sure");
    if (confirmRemove) {
      axios
        .delete(`http://localhost:3033/api/tasks/${id}`)
        .then((response) => {
          const result = response.data;
          console.log(result);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  return (
    <>
      {!show ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          <br />
          <br />
          <button onClick={handleClick1}>Show Data</button>
        </form>
      ) : (
        <>
          {" "}
          Data to be shown
          {data.map((ele, index) => {
            return (
              <div key={index}>
                <h3>
                  {index + 1} - Name: {ele.name}, DOB: {ele.dateOfBirth}
                  <button onClick={() => handleDel(ele.id)}>delete</button>
                </h3>
              </div>
            );
          })}
          <br />
          <br />
          <button onClick={handleClick2}>Back</button>
        </>
      )}
    </>
  );
};

export default TermLife;
//Testing
