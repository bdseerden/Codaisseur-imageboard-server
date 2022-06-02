// import express
const express = require("express");

// create server
const app = express();

// 3000 is common
const port = process.env.PORT || 4000;

// start listening on port 3000
app.listen(port);
