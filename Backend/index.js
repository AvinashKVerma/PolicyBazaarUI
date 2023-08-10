// Entry Point of the API Server
const express = require("express");
const cors = require("cors");

/* Creates an Express application.
The express() function is a top-level function exported by the express module.
*/

const app = express();
const pool = require("./db");

/* To handle the HTTP Methods Body Parser is used, Generally used to extract the
entire body portion of an incoming
request stream and exposes it on req.body
*/
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log("Connected to Database !");
  });
});

app.post("/users", async (req, res) => {
  try {
    const { id, name, gender, dateOfBirth } = req.body;
    const queryText =
      "INSERT INTO insurance (id, name, gender, dob) VALUES ($1, $2, $3 ,$4) RETURNING *";
    const values = [id, name, gender, dateOfBirth];

    const { rows } = await pool.query(queryText, values);

    res.status(201).json({
      message: "User added successfully!",
      user: rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/testdata", (req, res, next) => {
  pool.query("Select * from insurance").then((testData) => {
    res.send(testData.rows);
  });
});

app.get("/items/:id", (req, res) => {
  const { id: rawItemId } = req.params;
  const itemId = rawItemId.substring(1);

  pool
    .query("SELECT * FROM insurance WHERE id = $1", [itemId])
    .then((testData) => {
      console.log(testData);
      res.send(testData);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  pool.query("DELETE FROM insurance WHERE id = $1", [id], (err, result) => {
    if (err) {
      console.error("Error deleting item:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log("Item deleted successfully");
      res.status(200).json({ message: "Item deleted successfully" });
    }
  });
});

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, gender, dob } = req.body;

  try {
    const queryText = `
      UPDATE insurance
      SET name = $1, gender = $2, dob = $3
      WHERE id = $4
      RETURNING *`;
    const values = [name, gender, dob, id];

    const { rows } = await pool.query(queryText, values);

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully!",
      user: rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Require the Routes API
// Create a Server and run it on the port 3000
const server = app.listen(3005, function () {
  let host = server.address().address;
  let port = server.address().port;
  // Starting the Server at the port 3005
});
