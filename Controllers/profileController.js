const express = require('express');
const { GET_ALL_PROFILES, GET_A_PROFILE, CREATE_PROFILE, DELETE_PROFILE, UPDATE_PROFILE } = require('../queries/profile');
const profile = express.Router();


profile.get("/", async (req, res) => {
    const ALL_PROFILES = await GET_ALL_PROFILES();
    if (ALL_PROFILES) {
        return res.status(202).json(ALL_PROFILES);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

profile.get("/:id", async (req, res) => {
    const {id} = req.params
    const A_PROFILE = await GET_A_PROFILE(id);
    if (A_PROFILE) {
        return res.status(202).json(A_PROFILE);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

profile.post("/", async (req, res) => {
    const NEW_PROFILE = req.body;
    try {
        const CREATED_PROFILE = await CREATE_PROFILE(NEW_PROFILE)
        res.status(200).json(CREATED_PROFILE);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

profile.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const DELETED_PROFILE = await DELETE_PROFILE(id);
        res.status(200).json(DELETED_PROFILE);
    } catch (error) {
        res.status(400).json({error: error});
    };
});

profile.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const UPDATED_PROFILE = await UPDATE_PROFILE(id, body);
        res.status(200).json(UPDATED_PROFILE);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = profile;