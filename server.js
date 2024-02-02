// Import
const express = require('express');

// Initialize
const app = express();

// Specify
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));


// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
