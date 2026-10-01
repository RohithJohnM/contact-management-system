const mongoose = require("mongoose");

// Define the structure and validation rules
// for each contact document.
const ContactSchema = new mongoose.Schema({

    // Unique ID for each contact
    contactId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    // Contact name
    name: {
        type: String,
        required: true,
        trim: true
    },

    // Phone number must contain exactly 10 digits
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Phone number must contain exactly 10 digits"]
    },

    // Email must be unique and follow a valid email format
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address"
        ]
    }

});


// Create the Contact model
const Contact = mongoose.model("Contact", ContactSchema);


// Export the model
module.exports = Contact;