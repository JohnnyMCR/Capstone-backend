const express = require('express');
const { GET_ALL_COMMENTS, GET_A_COMMENT, CREATE_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } = require('../queries/comment');
const comment = express.Router();


comment.get("/", async (req, res) => {
    const ALL_COMMENT = await GET_ALL_COMMENTS();
    if (ALL_COMMENT) {
        return res.status(202).json(ALL_COMMENT);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

comment.get("/:id", async (req, res) => {
    const {id} = req.params
    const A_COMMENT = await GET_A_COMMENT(id);
    if (A_COMMENT) {
        return res.status(202).json(A_COMMENT);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

comment.post("/", async (req, res) => {
    const NEW_COMMENT = req.body;
    try {
        const CREATED_COMMENT = await CREATE_COMMENT(NEW_COMMENT)
        res.status(200).json(CREATED_COMMENT);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

comment.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const DELETED_COMMENT = await DELETE_COMMENT(id);
        res.status(200).json(DELETED_COMMENT);
    } catch (error) {
        res.status(400).json({error: error});
    };
});
comment.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const UPDATED_COMMENT = await UPDATE_COMMENT(id, body);
        res.status(200).json(UPDATED_COMMENT);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = comment;