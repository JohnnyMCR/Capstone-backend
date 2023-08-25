const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const forumsControler = require('./Controllers/forumsController.js')


app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use("/forums", forumsControler)

app.get("/", (req, res) => {
    res.send("Welcome to CareVillage");
})

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page Not Found" });
})


module.exports = app;