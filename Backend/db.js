const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'policybazaar',
  password: 'postgres',
  dialect: 'postgres',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'policybazaar',
//     password: 'postgres',
//     dialect: 'postgres',
//     port: 5432
// });