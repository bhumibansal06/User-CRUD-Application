# User CRUD Application

A simple web-based application for managing user data, including creating, reading, updating, and deleting (CRUD) user profiles. Built using Node.js, Express, MySQL, and EJS templating engine.

---

## Features
- **Add New Users:** Create user profiles with a unique ID, username, email, and password.
- **View All Users:** Display a list of all users in the database.
- **Edit User Profiles:** Update user information by validating user credentials.
- **Delete User Profiles:** Remove user data after verifying user credentials.
- **Error Handling:** Show error messages for incorrect password or email during edits or deletions.

---

## Technologies Used
- **Backend:**
  - Node.js with Express.js
  - MySQL for database management
- **Frontend:**
  - EJS templating engine for dynamic HTML rendering
- **Utilities:**
  - Faker.js for generating random user data
  - method-override for handling HTTP methods like PATCH and DELETE
  - uuid for generating unique user IDs

---
