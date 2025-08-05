const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function connect() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}

module.exports = connect;