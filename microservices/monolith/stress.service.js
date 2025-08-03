const cluster = require('cluster');
const os = require('os');
const express = require('express');
const morgan = require('morgan');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  console.log(`Starting ${numCPUs} worker processes...`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log('Starting a new worker...');
    cluster.fork();
  });

} else {
  // Worker process
  const app = express();
  app.use(morgan('dev'));

  app.get('/', (req, res) => {
    for (let i = 0; i < 1000_000_000; i++) {
      // Simulate some CPU work
    }
    res.send(`Hello contact from worker ${process.pid}!`);
  });

  app.listen(3002, () => {
    console.log(`Worker ${process.pid} - contact Service is running on http://localhost:3002`);
  });
}