// Create web server
// 1. Load express
// 2. Create an express app
const express = require('express');
const app = express();
// 3. Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});