const express = require('express');
const {
    getAllDonations,
    getADonation,
    createDonation,
    deleteDonation,
    updateDonation
} = require('../queries/donations');
const donations = express.Router();


donations.get("/", async (req, res) => {
    const allDonations = await getAllDonations();
    if (allDonations) {
        return res.status(202).json(allDonations);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

donations.get("/:id", async (req, res) => {
    const {id} = req.params
    const aDonation = await getADonation(id);
    if (aDonation) {
        return res.status(202).json(aDonation);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

donations.post("/", async (req, res) => {
    const newDonation = req.body;
    try {
        const createdDonation = await createDonation(newDonation)
        res.status(200).json(createdDonation);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

donations.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const deletedDonation = await deleteDonation(id);
        res.status(200).json(deletedDonation);
    } catch (error) {
        res.status(400).json({error: error});
    };
});

donations.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const updatedDonation = await updateDonation(id, body);
        res.status(200).json(updatedDonation);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = donations;