const express = require('express');
const {
    getAllUsers,
    getAUser,
    createUser,
    deleteUser,
    updateUser
} = require('../queries/users');
const users = express.Router();


users.get("/", async (req, res) => {
    const allUsers = await getAllUsers();
    if (allUsers) {
        return res.status(202).json(allUsers);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});



users.get("/:id", async (req, res) => {
    const {id} = req.params
    const aUser = await getAUser(id);
    if (aUser) {
        return res.status(200).json(aUser);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

users.post("/", async (req, res) => {
    const newUser = req.body;
    try {
        const createdUser = await createUser(newUser)
        res.status(200).json(createdUser);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

users.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const deletedUser = await deleteUser(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({error: error});
    };
});

users.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const updatedUser = await updateUser(id, body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = users;