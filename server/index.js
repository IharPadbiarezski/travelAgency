const express = require('express');
const routes = require('./routes');

// create the new server
const app = express();

// listen for the homepage
app.use('/', routes());

// run the application
app.listen(3000);
