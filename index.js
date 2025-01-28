const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require("uuid");

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'users',
    password: 'Bhumi 0611'
});

// Function to generate random user data
let createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// Home route
app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user_data";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
    }
});

// Route to create a new user
app.get("/users/new", (req, res) => {
    res.render("new.ejs");
});

// POST route to save a new user
app.post("/users", (req, res) => {
    let { username: Name, email: Email, password: Password } = req.body;
    let id = uuidv4();

    let query = "INSERT INTO user_data (id, Name, Email, Password) VALUES (?, ?, ?, ?)";
    let values = [id, Name, Email, Password];
    try {
        connection.query(query, values, (err, result) => {
            if (err) throw err;
            res.redirect("/users");
        })
    } catch (err) {
        console.log(err);
    }
});

// Display all users
app.get("/users", (req, res) => {
    let q = "SELECT id, Name, Email FROM user_data";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let users = result;
            res.render("index.ejs", { users });
        });
    } catch (err) {
        console.log(err);
    }
});

// Show individual user details
app.get("/users/:id", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user_data WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("show.ejs", { user });
        });
    } catch (err) {
        console.log(err);
    }
});

// Edit user details
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user_data WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user, error: null, success: null });
        });
    } catch (err) {
        console.log(err);
    }
});

// PATCH route to update user details
app.patch("/users/:id", (req, res) => {
    let { id } = req.params;
    let { username: currUsername, password: currPassword } = req.body;
    let q = `SELECT * FROM user_data WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (currPassword != user.Password) {
                res.render("edit.ejs", { user, error: "Incorrect password. Please try again.", success: null });
            } else {
                let q2 = `UPDATE user_data SET Name = '${currUsername}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/users");
                });
            }
        });
    } catch (err) {
        console.log(err);
    }
});

// Delete user
app.get("/users/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user_data WHERE id = ?`;
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("delete.ejs", { user, error: null });
        });
    } catch (err) {
        console.log(err);
    }
});

// POST route to delete user
app.delete("/users/:id", (req, res) => {
    let { id } = req.params;
    let { Email: currEmail, password: currPassword } = req.body;
    let q = `SELECT * FROM user_data WHERE id = ?`;
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (currPassword != user.Password || currEmail != user.Email) {
                res.render("delete.ejs", { user, error: "Incorrect email or password. Please try again." });
            } else {
                let q2 = `DELETE FROM user_data WHERE id = ?`;
                connection.query(q2, [id], (err, result) => {
                    if (err) throw err;
                    res.redirect("/users");
                });
            }
        });
    } catch (err) {
        console.log(err);
    }
});

app.listen("8080", () => {
    console.log("listening to port 8080");
});
