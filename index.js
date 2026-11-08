const { json } = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 3000;

app.use(express.json());

let USERS_ID = 1;
let ORGANIZATIONS_ID = 1;
let BOARDS_ID = 1;
let ISSUES_ID = 1;


// LITTLE BIT DB DESIGN
const USERS = [{
    id: 1,
    username: "malik",
    password: "Testuser@1"
}];

const ORGANIZATIONS = [{
    id: 1,
    title: "MJ Private LTD",
    description: "software company",
    admin: 1,
    members: [1]
}];


const BOARDS = [{
    id: 1,
    title: "computer team",
    organizationId: 1
}];


const ISSUES = [{
    id: 1,
    title: "Add some desings to it",
    boardId: 1,
    status: "IN_PROGRESS"
}];

app.get("/ping", (req, res) => {
    res.send('pong');
})

// CREATE ENDPOINTS
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(u => u.username === username);
    if (userExists) {
        return res.status(409).json({
            message: "User with this username already exists"
        });
    }

    USERS.push({
        username,
        password,
        id: USERS_ID++
    });

    return res.status(200).json({
        message: "Singup successfully"
    });

});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(u => u.username === username && u.password === password);
    if (!userExists) {
        return res.status(403).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        userId: userExists.id
    }, "supersecret")

    res.json({
        tokens: token
    })


});

app.post("/organization", (req, res) => {

});


app.post("/add-members-to-organization", (req, res) => {

});

app.post("/board", (req, res) => {

});

app.post("/issues", (req, res) => {

});


// READ ENDPOINTS

app.get("/boards", (req, res) => {

});

app.get("/issues", (req, res) => {

});

app.get("/members ", (req, res) => {

});


// PUT ENDPOINTS
app.put("/issues", (req, res) => {

});

// DELETE ENDPOITNS
app.delete("/members", (req, res) => {

});



app.listen(PORT, (req, res) => {
    console.log(`Server listening on ${PORT}`);
})