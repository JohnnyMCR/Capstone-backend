const express = require("express");
const forums = express.Router();
const {
    getAllForums,
    getAForum,
    createForum,
    deleteForum,
    getForumsByUserId,
    updateForum
} = require('../queries/forums');
const commentContoller = require('./commentController');
forums.use('/:forumsId/comments', commentContoller);


//show all forums
forums.get("/", async (req, res) => {
    const allForums = await getAllForums();
    if (allForums) {
        return res.status(200).json(allForums);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

forums.get("/user/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
        const userForums = await getForumsByUserId(userId);
        res.status(200).json(userForums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//show single forum
forums.get('/:id', async (req, res) => {
    const { id } = req.params;
    const forum = await getAForum(id);
    if (forum) {
        res.status(200).json(forum);
    } else {
        res.status(500).json({ error: 'Server Error'});
    };
});


//create new post
forums.post("/", async (req, res) => {
    const newForum = req.body;
    try {
        const createdForum = await createForum(newForum)
        res.status(200).json(createdForum);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

//delete a forum

forums.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const deletedForum = await deleteForum(id);
        res.status(200).json(deletedForum);
    } catch (error) {
        res.status(400).json({error: error});
    };
});

forums.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const updatedForum = await updateForum(id, body);
        res.status(200).json(updatedForum);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = forums;

