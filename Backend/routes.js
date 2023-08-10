const express = require('express');
const pool = require('./db');

const router = express.Router();

// Create a new entry
// router.post('/users', (req, res) => {
//   const body = req.body 
//   console.log(body,"test")
  
// });



app.post('/users', (req, res) => {
  const postData = req.body;
  console
  
  // Simulate an asynchronous operation (e.g., saving data to a database)
  performAsyncOperation(postData)
    .then(() => {
      console.log('Data saved successfully');
      res.status(200).json({ message: 'Data received and saved successfully' });
    })
    .catch((error) => {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});


router.post('/users', (req, res) => {
  try {
    const {id, name, gender, dob} = req.body;
    console.log(id, name, gender, dob)
    // Process the postData and perform any necessary actions
    console.log('Received POST data:', id, name, gender, dob);
    pool.query(`insert into insurance(id, name, gender,dob) values(${id}, '${name}', '${gender}', '${dob}`)
    res.status(200).json({ message: 'Data received successfully' });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// .post('/users', async (req, res) => {
//   try {
//     const user = req.body;
//     console.log(user,"test")
//     const newEntry = await pool.query(
//       `insert into insurance(id, name, gender, dob) 
//                        values(${user.id}, '${user.name}', '${user.gender}', '${user.dateOfBirth}')`
//     );
//     res.json(newEntry.rows[0]);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// Get all entries
router.get('/items', async (req, res) => {
  try {
    const allEntries = await pool.query('SELECT * FROM items');
    res.json(allEntries.rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a single entry
router.get('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    res.json(entry.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update an entry
router.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedEntry = await pool.query(
      'UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, id]
    );
    res.json(updatedEntry.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an entry
router.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
