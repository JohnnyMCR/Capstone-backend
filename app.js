const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");


app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.get("/", (req, res) => {
    res.send("Welcome to CareVillage");
})

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page Not Found" });
})


module.exports = app;