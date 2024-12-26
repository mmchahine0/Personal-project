const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 3000
mongoose.connect("").then().catch()

app.listen(port, () => {
  console.log('listening on port')
});