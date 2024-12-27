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
1. Clone the repository: (use Visual Studio Code) git clone https://github.com/bhumibansal06/User-CRUD-Application.git
2. Install dependencies: npm install
3. Set up MySQL database: <br>
   Create a database named users. <br>
   Run the following query to create the user_data table: <br>
   CREATE TABLE user_data ( <br>
   id VARCHAR(255) PRIMARY KEY, <br>
   Name VARCHAR(255), <br>
   Email VARCHAR(255), <br>
   Password VARCHAR(255) <br>
   );
4. Update database credentials in index.js: <br>
   const connection = mysql.createConnection({ <br>
   host: 'localhost', <br>
   user: 'root', <br>
   database: 'users', <br>
   password: 'your_mysql_password' <br>
   });
5. Start the server: nodemon index.js
6. Open your browser and navigate to: http://localhost:8080



