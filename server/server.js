const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json("Hello!");
});
app.get("/api/users/", (req, res) => {
  res.json("Current Logged In User");
});

app.listen(port, () => {
  console.log("Server started in port " + port + ".");
});
