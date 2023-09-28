const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const forumsController = require('./Controllers/forumController.js');
const donationsController = require('./Controllers/donationsController.js');
const commentController = require('./Controllers/commentController.js');
const profileController = require('./Controllers/profileController.js');
const categoryController = require('./Controllers/categoryController.js')


app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use("/forums", forumsController);
app.use("/donations", donationsController);
app.use("/comments", commentController);
app.use("/profiles", profileController);
app.use("/categories", categoryController);

app.get("/", (req, res) => {
    res.send("Welcome to CareVillage");
});
app.get("/api/users/:profileId", async (req, res) => {
  try {
    const profileId = req.params.profileId;

    const user = await db.oneOrNone('SELECT username FROM profiles WHERE id = $1', profileId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get("*", (req, res) => {
    res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
