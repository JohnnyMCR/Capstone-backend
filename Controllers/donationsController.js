const express = require('express');
const { GET_ALL_DONATIONS, GET_A_DONATION, CREATE_DONATION, DELETE_DONATION, UPDATE_DONATION } = require('../queries/donations');
const donations = express.Router();


donations.get("/", async (req, res) => {
    const ALL_DONATIONS = await GET_ALL_DONATIONS();
    if (ALL_DONATIONS) {
        return res.status(202).json(ALL_DONATIONS);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

donations.get("/:id", async (req, res) => {
    const {id} = req.params
    const A_DONATION = await GET_A_DONATION(id);
    if (A_DONATION) {
        return res.status(202).json(A_DONATION);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

donations.post("/", async (req, res) => {
    const NEW_DONATION = req.body;
    try {
        const CREATED_DONATION = await CREATE_DONATION(NEW_DONATION)
        res.status(200).json(CREATED_DONATION);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

donations.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const DELETED_DONATION = await DELETE_DONATION(id);
        res.status(200).json(DELETED_DONATION);
    } catch (error) {
        res.status(400).json({error: error});
    };
});

donations.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const UPDATED_DONATION = await UPDATE_DONATION(id, body);
        res.status(200).json(UPDATED_DONATION);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = donations;