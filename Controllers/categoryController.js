const express = require('express');
const categories = express.Router();
const {
    getAllCategories,
    getACategory,
    createCategory,
    deleteCategory,
    updateCategory
} = require('../queries/categories');

// Get all categories
categories.get("/", async (req, res) => {
    try {
        const allCategories = await getAllCategories();
        res.status(200).json(allCategories);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

// Get a specific category by ID
categories.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const aCategory = await getACategory(id);
        if (aCategory) {
            res.status(200).json(aCategory);
        } else {
            res.status(404).json({ error: "Category not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

// Create a new category
categories.post("/", async (req, res) => {
    const newCategory = req.body;
    try {
        const createdCategory = await createCategory(newCategory);
        res.status(201).json(createdCategory);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

// Delete a category by ID
categories.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCategory = await deleteCategory(id);
        if (deletedCategory) {
            res.status(200).json(deletedCategory);
        } else {
            res.status(404).json({ error: "Category not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

// Update a category by ID
categories.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const updatedCategory = await updateCategory(id, body);
        if (updatedCategory) {
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ error: "Category not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

module.exports = categories;
