# Contact Management System

A RESTful Contact Management System built using **Node.js, Express.js, MongoDB, and Mongoose**.  
The application provides complete CRUD operations for managing contact records, including schema validation, duplicate-data protection, and structured error handling.

The project also includes a simple web-based frontend that communicates with the REST API and allows users to create, view, update, and delete contacts through a browser.

---

## Project Overview

The Contact Management System is designed to demonstrate a complete backend application using Node.js and Express.js with MongoDB as the database and Mongoose as the ODM layer.

The system supports:

- Creating new contacts
- Retrieving all contacts
- Retrieving an individual contact
- Updating contact details
- Deleting contacts
- Input validation
- Duplicate `contactId` and email prevention
- Error handling for invalid requests
- Browser-based CRUD operations through a frontend interface

---

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| Node.js | JavaScript runtime environment |
| Express.js | Web server and REST API framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB ODM and schema validation |
| dotenv | Environment variable management |
| Nodemon | Development server auto-restart |
| HTML / CSS / JavaScript | Frontend interface |
| Postman | API testing |
| Docker | Application containerization |
| ByteXL | Application development and deployment |
| Git / GitHub | Version control and source-code hosting |

---

# Assignment Deliverables

This project satisfies the required deliverables:

### 1. Node.js + Express.js project with Mongoose integration

The project uses:

- Node.js
- Express.js
- Mongoose
- MongoDB Atlas

Mongoose is used to define the Contact schema, perform database operations, and enforce validation rules.

### 2. CRUD APIs for Contact Records

The following REST API operations are implemented:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/contacts` | Create a new contact |
| GET | `/contacts` | Retrieve all contacts |
| GET | `/contacts/:id` | Retrieve a contact by MongoDB `_id` |
| PUT | `/contacts/:id` | Update a contact |
| DELETE | `/contacts/:id` | Delete a contact |

### 3. Proper Validation and Error Handling

The application implements validation for:

- Required contact name
- Required phone number
- Exactly 10 digits for phone number
- Required email
- Valid email format
- Unique `contactId`
- Unique email address

The API also handles:

- Invalid MongoDB IDs
- Missing required fields
- Invalid phone numbers
- Invalid email addresses
- Duplicate contact IDs
- Duplicate email addresses
- Contact-not-found conditions
- Server-side errors

### 4. GitHub Repository with Source Code and README

The complete source code, project structure, documentation, and configuration files are available on GitHub.

**GitHub Repository:**

https://github.com/RohithJohnM/contact-management-system

---

# System Architecture

```text
                ┌──────────────────────────┐
                │       Web Frontend       │
                │   HTML / CSS / JavaScript│
                └────────────┬─────────────┘
                             │
                             │ HTTP Requests
                             ▼
                ┌──────────────────────────┐
                │       Express.js         │
                │       REST API           │
                └────────────┬─────────────┘
                             │
                             ▼
                ┌──────────────────────────┐
                │         Mongoose         │
                │  Schema + Validation     │
                └────────────┬─────────────┘
                             │
                             ▼
                ┌──────────────────────────┐
                │       MongoDB Atlas      │
                │    Contact Database      │
                └──────────────────────────┘