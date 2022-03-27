//initial setup
const express = require("express");
const app = express();
const port =8000;
app.use("/", require("./routes"));

//listening to the server
app.listen(port, function (err) {
  if (err) {
    console.log("ERROR in connectiong to the server");
  }
  console.log(`Server is running on port ${port}`);
});