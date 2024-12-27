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
### Steps
1. Clone the repository: (use Visual Studio Code) git clone
2. Install dependencies: npm install
3. Set up MySQL database:
   Create a database named users.
   Run the following query to create the user_data table:
   CREATE TABLE user_data (
   id VARCHAR(255) PRIMARY KEY,
   Name VARCHAR(255),
   Email VARCHAR(255),
   Password VARCHAR(255)
   );
4. Update database credentials in index.js:
   const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'users',
   password: 'your_mysql_password'
   });
5. Start the server: nodemon index.js
6. Open your browser and navigate to: http://localhost:8080



