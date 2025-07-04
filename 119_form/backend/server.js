const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // allow all origins
app.use(express.json()); // to parse JSON in POST body

app.get('/', (req, res) => {
  res.send('Hello from Express GET!');
});

app.post('/', (req, res) => {
  console.log("Received POST:", req.body); // log the incoming data
  res.send('Hello from Express POST!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
