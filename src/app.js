const config = require('./config.js');
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
 
const app = express();
const PORT = config.port;

app.use(bodyParser.json());

app.get('/compare', (req, res) => {
  
});
 
app.listen(PORT, err => {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`App listening on port ${PORT}`);
  }
});
