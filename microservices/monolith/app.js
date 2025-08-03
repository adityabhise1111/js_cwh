const express = require('express');
const morgan = require('morgan');

const app= express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    for (let i = 0; i < 100_000_000; i++) {
        // Simulate some CPU work
    }
  res.send('Hello World!');
});
app.get('/stress', (req, res) => {
  for (let i = 0; i < 100_000_000; i++) {
    // Simulate some CPU work
  }
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});