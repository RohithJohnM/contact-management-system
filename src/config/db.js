// Import Mongoose
const mongoose = require("mongoose");

// Load variables from .env
require("dotenv").config();


// Function to connect to MongoDB
//
// async is used because connecting to MongoDB
// is an asynchronous operation.
//
// await makes the program wait until
// MongoDB connection is completed.
const connectDB = async () => {

    try {

        // Read MongoDB URI from .env
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully");

    } catch (error) {

        console.log("MongoDB connection failed:");
        console.log(error.message);

        // Stop the application if database connection fails
        process.exit(1);
    }
};


// Export the function so app.js can use it
module.exports = connectDB;