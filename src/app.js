const express = require('express');
const fetch = require('node-fetch');
 
const app = express();
const PORT = 3000;
 
app.listen(PORT, err => {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`App listening on port ${PORT}`);
  }
});
