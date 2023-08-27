const express = require("express");
const forums = express.Router();
const {GET_ALL_FORUMS, GET_A_FORUM, CREATE_FORUM, DELETE_FORUM, UPDATE_FORUM} = require('../queries/forums');


//show all forums
forums.get("/", async (req, res) => {
    const ALL_FORUMS = await GET_ALL_FORUMS();
    if (ALL_FORUMS) {
        return res.status(202).json(ALL_FORUMS);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

//show sinlge forum
forums.get("/:id", async (req, res) => {
    const {id} = req.params
    const A_FORUM = await GET_A_FORUM(id);
    if (A_FORUM) {
        return res.status(202).json(A_FORUM);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});


//create new post
forums.post("/", async (req, res) => {
    const NEW_FORUM = req.body;
    try {
        const CREATED_FORUM = await CREATE_FORUM(NEW_FORUM)
        res.status(200).json(CREATED_FORUM);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

//delete a forum

forums.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const DELETED_FORUM = await DELETE_FORUM(id);
        res.status(200).json(DELETED_FORUM);
    } catch (error) {
        res.status(400).json({error: error});
    };
});

forums.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const UPDATED_FORUM = await UPDATE_FORUM(id, body);
        res.status(200).json(UPDATED_FORUM);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = forums;

