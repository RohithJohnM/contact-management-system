# Contact Management System

A full-stack Contact Management System built using **Node.js, Express.js, MongoDB, and Mongoose**. The application provides complete CRUD operations for managing contact records, along with schema validation, duplicate-data protection, structured error handling, and a browser-based frontend.

---

## Project Overview

The Contact Management System demonstrates a complete web application using Node.js and Express.js as the backend, MongoDB Atlas as the database, and Mongoose as the Object Data Modeling (ODM) library.

The system allows users to:

- Create new contacts
- Retrieve all contacts
- Retrieve an individual contact
- Update contact details
- Delete contacts
- Validate contact information
- Prevent duplicate contact IDs and email addresses
- Handle invalid requests and database errors
- Perform CRUD operations through a web-based frontend

---

## Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Web server and REST API framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB ODM and schema validation |
| dotenv | Environment variable management |
| Nodemon | Development server auto-restart |
| HTML / CSS / JavaScript | Frontend interface |
| Postman | REST API testing |
| Docker | Application containerization |
| ByteXL | Development and deployment environment |
| Git / GitHub | Version control and source-code hosting |

---

# Assignment Deliverables

This project fulfills the required assignment deliverables.

### 1. Node.js + Express.js Project with Mongoose Integration

The application is developed using:

- Node.js
- Express.js
- Mongoose
- MongoDB Atlas

Mongoose is used for:

- Defining the Contact schema
- Connecting the application to MongoDB
- Performing database operations
- Applying schema validation

---

### 2. CRUD APIs for Contact Records

The following REST API endpoints are implemented:

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/contacts` | Create a new contact |
| `GET` | `/contacts` | Retrieve all contacts |
| `GET` | `/contacts/:id` | Retrieve a contact by MongoDB `_id` |
| `PUT` | `/contacts/:id` | Update a contact |
| `DELETE` | `/contacts/:id` | Delete a contact |

---

### 3. Validation and Error Handling

The application implements validation for:

- Required contact name
- Required phone number
- Exactly 10 digits for phone number
- Required email address
- Valid email format
- Unique `contactId`
- Unique email address

The API handles:

- Invalid MongoDB IDs
- Missing required fields
- Invalid phone numbers
- Invalid email addresses
- Duplicate contact IDs
- Duplicate email addresses
- Contact-not-found conditions
- Server-side errors

---

### 4. GitHub Repository

The complete source code, documentation, project structure, and configuration files are maintained in the GitHub repository.

**GitHub Repository:**

https://github.com/RohithJohnM/contact-management-system

---

### 5. Publicly Deployed Application

The application is deployed through ByteXL and is accessible through the following public URL:

**Live Application:**

https://contact-management-system-by-rohith-john-24bad100.bytexl.live

The deployed frontend allows users to:

- View existing contacts
- Add new contacts
- Edit existing contacts
- Delete contacts

All operations are connected to the MongoDB Atlas database through the Express.js backend.

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
                │        REST API          │
                └────────────┬─────────────┘
                             │
                             ▼
                ┌──────────────────────────┐
                │         Mongoose         │
                │   Schema + Validation    │
                └────────────┬─────────────┘
                             │
                             ▼
                ┌──────────────────────────┐
                │       MongoDB Atlas      │
                │     Contact Database     │
                └──────────────────────────┘