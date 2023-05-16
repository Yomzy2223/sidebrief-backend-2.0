const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

const port = process.env.PORT || "8000";
app.listen(port, () => {
  console.log("Port 8000 Active");
});
