const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();


// ============================================================
// POST /contacts
// Add a new contact
// ============================================================

router.post("/", async (req, res) => {

    try {

        // Get contact details from the request body
        const { contactId, name, phone, email } = req.body;

        // Create a new contact using the Mongoose model
        const contact = new Contact({
            contactId,
            name,
            phone,
            email
        });

        // Save the contact in MongoDB
        const savedContact = await contact.save();

        // Send the saved contact as response
        res.status(201).json({
            message: "Contact created successfully",
            contact: savedContact
        });

    } catch (error) {

        // Handle Mongoose validation errors
        if (error.name === "ValidationError") {

            return res.status(400).json({
                message: "Validation error",
                errors: error.errors
            });

        }

        // Handle duplicate contactId or email
        if (error.code === 11000) {

            return res.status(400).json({
                message: "contactId or email already exists"
            });

        }

        // Handle other errors
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// ============================================================
// GET /contacts
// Fetch all contacts
// ============================================================

router.get("/", async (req, res) => {

    try {

        // Fetch all contact documents from MongoDB
        const contacts = await Contact.find();

        // Send contacts to the client
        res.status(200).json(contacts);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// ============================================================
// GET /contacts/:id
// Fetch one contact by MongoDB _id
// ============================================================

router.get("/:id", async (req, res) => {

    try {

        // Get the ID from the URL
        const id = req.params.id;

        // Find the contact using its MongoDB _id
        const contact = await Contact.findById(id);

        // If contact doesn't exist
        if (!contact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        // Send the contact
        res.status(200).json(contact);

    } catch (error) {

        console.log(error);

        res.status(400).json({
            message: "Invalid contact ID"
        });
    }
});

// ============================================================
// PUT /contacts/:id
// Update an existing contact
// ============================================================

router.put("/:id", async (req, res) => {

    try {

        // Get contact ID from the URL
        const id = req.params.id;

        // Get updated data from request body
        const { contactId, name, phone, email } = req.body;

        // Update the contact
        const updatedContact = await Contact.findByIdAndUpdate(
            id,
            {
                contactId,
                name,
                phone,
                email
            },
            {
                new: true,
                runValidators: true
            }
        );

        // If contact doesn't exist
        if (!updatedContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        // Send updated contact
        res.status(200).json({
            message: "Contact updated successfully",
            contact: updatedContact
        });

    } catch (error) {

        console.log(error);

        // Handle validation errors
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: "Validation error",
                errors: error.errors
            });
        }

        // Handle duplicate contactId/email
        if (error.code === 11000) {
            return res.status(400).json({
                message: "contactId or email already exists"
            });
        }

        res.status(500).json({
            message: "Server error"
        });
    }
});

// ============================================================
// DELETE /contacts/:id
// Delete a contact
// ============================================================

router.delete("/:id", async (req, res) => {

    try {

        // Get contact ID from the URL
        const id = req.params.id;

        // Delete the contact
        const deletedContact = await Contact.findByIdAndDelete(id);

        // If contact doesn't exist
        if (!deletedContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        // Send deleted contact as response
        res.status(200).json({
            message: "Contact deleted successfully",
            contact: deletedContact
        });

    } catch (error) {

        console.log(error);

        res.status(400).json({
            message: "Invalid contact ID"
        });
    }
});


module.exports = router;