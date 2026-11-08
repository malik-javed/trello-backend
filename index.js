const express = require("express");
const app = express();
const PORT = 3000;


app.get("/ping", (req, res) => {
    res.send('pong');
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening on ${PORT}`);
})