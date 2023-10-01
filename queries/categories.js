const db = require(`../db/dbConfig`);

// Index of all categories
const getAllCategories = async () => {
    try {
        const allCategories = await db.any(`SELECT * FROM categories`);
        return allCategories;
    } catch (error) {
        return error;
    }
};

// Show a category
const getACategory = async (id) => {
    try {
        const category = await db.one(`SELECT * FROM categories WHERE id=$1`, id);
        return category;
    } catch (error) {
        return error;
    }
};

// Create a category
const createCategory = async (categoryToAdd) => {
    try {
        const newCategory = await db.one(
            `INSERT INTO categories (name) VALUES ($1) RETURNING *`,
            [categoryToAdd.name]
        );
        return newCategory;
    } catch (error) {
        return error;
    }
};

// Delete a category
const deleteCategory = async (id) => {
    try {
        const deletedCategory = await db.one(`DELETE FROM categories WHERE id=$1 RETURNING *`, id);
        return deletedCategory;
    } catch (error) {
        return error;
    }
};

// Update a category
const updateCategory = async (id, category) => {
    try {
        const updatedCategory = await db.one(
            `UPDATE categories SET name=$1 WHERE id=$2 RETURNING *`,
            [category.name, id]
        );

        return updatedCategory;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllCategories,
    getACategory,
    createCategory,
    deleteCategory,
    updateCategory
};
