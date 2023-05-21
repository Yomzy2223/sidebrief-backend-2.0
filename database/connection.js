const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "Dsquare142",
  database: "sidebrief",
  port: 5432,
});

client.connect((error, response) => {
  if (error) {
    console.log("Error occurred while connecting to database testing", error);
  } else {
    console.log("Connection established testing!");
  }
});

module.exports = client;
