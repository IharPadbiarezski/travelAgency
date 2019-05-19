const express = require('express');

// create the new server
const app = express();

// listen for the homepage
app.use('/', (req, res) => {
	res.send('Index');
});
app.use('/about', (req, res) => {
	res.send('Index');
});

// run the application
app.listen(3000);
