const { Client } = require("pg");

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

client.connect((error, response) => {
  if (error) {
    console.log("Error occurred while connecting to database testing", error);
  } else {
    console.log("Connection established testing!");
  }
});

module.exports = client;
