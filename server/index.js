require('dotenv').config();

const express = require('express');
const cors = require('cors');
const colors = require('colors');
const axios = require('axios').default;
const app = express();

const PORT = process.env.PORT || 4832;

app.listen(PORT, () => {
	console.debug(`Server running on PORT: ${PORT}`.rainbow);
});

app.get('/', (req, res) => {
	res.send('root');
});

app.get('*', (req, res) => {
	res.send('../404.html');
});
