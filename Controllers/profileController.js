const express = require('express');
const {
    getAllProfiles,
    getAProfile,
    createProfile,
    deleteProfile,
    updateProfile
} = require('../queries/profiles');
const profiles = express.Router();


profiles.get("/", async (req, res) => {
    const allProfiles = await getAllProfiles();
    if (allProfiles) {
        return res.status(202).json(allProfiles);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

profiles.get("/:id", async (req, res) => {
    const {id} = req.params
    const aProfile = await getAProfile(id);
    if (aProfile) {
        return res.status(202).json(aProfile);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

profiles.post("/", async (req, res) => {
    const newProfile = req.body;
    try {
        const createdProfile = await createProfile(newProfile)
        res.status(200).json(createdProfile);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

profiles.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const deletedProfile = await deleteProfile(id);
        res.status(200).json(deletedProfile);
    } catch (error) {
        res.status(400).json({error: error});
    };
});

profiles.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const updatedProfile = await updateProfile(id, body);
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = profiles;