require('dotenv').config({ path: './w3s-dynamic-storage/.env' });
const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
// App
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);