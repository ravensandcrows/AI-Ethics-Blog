// Dependencies
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const helper = require('./utils/helper');


// Initialize and set up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Static middleware pointing to the public folder
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views','./views');

app.use(express.static(path.join(__dirname,'public')));

//set up routes

app.use(require('./controllers/homeRoutes'));

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
