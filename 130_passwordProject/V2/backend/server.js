import express from 'express';
import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import cors from 'cors'; // Importing CORS middleware

config();

const url = process.env.MONGO_URI;   // MongoDB connection string
const client = new MongoClient(url); // Create a new MongoClient instance

// Connect to MongoDB with error handling
let db;
try {
    await client.connect();
    db = client.db('secureLock');
    console.log('Connected to MongoDB successfully');
} catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process if connection fails
}

const dbName = 'secureLock';         // Database name

const app = express()                // Initialize express app
const port = 3000                     // Define the port for the server

// Use built-in express.json() instead of body-parser
app.use(express.json());              // Middleware to parse JSON request bodies
//earlier we uses body-parser but now built in
// it baiscally parses the incoming request bodies in a middleware before your handlers, 
// available under the req.body property. ****
// which makes it easier to handle JSON data in requests
// coz it cant directly parse the request body, 
app.use(cors());                    // Use CORS middleware to allow cross-origin requests



app.get('/', async (req, res) => {

    let db;
    try {
        db = client.db(dbName);
        const collection = db.collection('credentials');        // Select the collection
        const findResult = await collection.find({}).toArray(); // fetch data
        console.log(findResult);                                 // Log the fetched data
        res.json(findResult);
    } catch (error) {
        console.error('Error fetchin data', error);
        res.status(500).send('error connection')

    }                               // Send the fetched data as JSON response

})

app.post('/', async (req, res) => {
    try{
    const credential = req.body
    const collection = db.collection('credentials');
    const findResult = await collection.insertOne(credential);    // Select the collection
    console.log(findResult);                                 // Log the result of insertion
    res.send({ success: true, result: findResult });  
    }catch(error){
        console.error('Error inserting data', error);
        res.status(500).json({
            success: false,
            message: 'Error inserting data'
        })
    }               // Send the result of insertion

})

app.delete('/', async (req, res) => {

    try {
        const credential = req.body
        const { id } = req.body;
        const collection = db.collection('credentials');
        const findResult = await collection.deleteOne({ id });    // Select the collection
        console.log(findResult);                                 // Log the result of deletion
        res.send({ success: true, result: findResult });
    } catch (error) {
        console.error('Error deleting data', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting data'
        });
    }

})

app.listen(port, () => {
    console.log(`Example  app listening on port ${port}`)
})
