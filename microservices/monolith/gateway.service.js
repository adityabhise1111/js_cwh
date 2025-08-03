const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const port = 3000;

app.use('/stress-test', proxy('http://localhost:3002'));
app.use('/', proxy('http://192.168.241.160:3001'));

app.listen(port, () => {
  console.log(`Gateway service is running on http://localhost:${port}`);
})