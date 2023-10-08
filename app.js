const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const forumsController = require('./Controllers/forumController.js');
const donationsController = require('./Controllers/donationsController.js');
const donationCommentController = require('./Controllers/donationCommentController.js');
const commentController = require('./Controllers/commentController.js');
const userController = require('./Controllers/userController.js');
const categoryController = require('./Controllers/categoryController.js')


app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use("/forums", forumsController);
app.use("/donations", donationsController);
app.use("/comments", commentController);
app.use("/users", userController);
app.use("/categories", categoryController);
app.use("/donation-comments", donationCommentController);

app.get("/", (req, res) => {
    res.send("Welcome to CareVillage");
});

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
