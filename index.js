const express = require("express");
const app = express();
const PORT = 3000;


app.get("/ping", (req, res) => {
    res.send('pong');
})

// CREATE ENDPOINTS
app.post("/singup", (req, res) => {

});

app.post("/singin", (req, res) => {

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