const express = require('express');
const donationComments = express.Router({mergeParams: true});
const {
    getAllDonationsComments,
    getADonationsComment,
    createDonationsComment,
    deleteDonationsComment,
    updateDonationsComment
} = require('../queries/donationComments');




donationComments.get("/", async (req, res) => {
    console.log("in the comments controller")
    const { donationsId } = req.params;
    try{
        const allDonationComments = await getAllDonationsComments(donationsId)
        res.json(allDonationComments)
    }catch (err) {
        res.json(err)
    }
  });

donationComments.get("/:id", async (req, res) => {
    const {id} = req.params
    const aDonationComment = await getADonationsComment(id);
    if (aDonationComment) {
        return res.status(202).json(aDonationComment);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

donationComments.post("/", async (req, res) => {
    const newDonationComment = req.body;
    console.log(newDonationComment)
    try {
        const createdDonationComment = await createDonationsComment(newDonationComment)
        res.status(200).json(createdDonationComment);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

donationComments.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const deletedDonationComment = await deleteDonationsComment(id);
        res.status(200).json(deletedDonationComment);
    } catch (error) {
        res.status(400).json({error: error});
    };
});
donationComments.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const updatedDonationComment = await updateDonationsComment(id, body);
        res.status(200).json(updatedDonationComment);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = donationComments;