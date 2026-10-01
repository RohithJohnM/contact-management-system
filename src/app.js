const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
// Allows Express to read JSON data sent in the request body.
app.use(express.json());

// Connect to MongoDB
connectDB();

// Home route
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Contact routes
// All routes inside contactRoutes will start with /contacts
app.use("/contacts", contactRoutes);

// Server port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});