const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client'));

// Setup Environment

const port = process.env.PORT || 3002;

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});