const db = require(`../db/dbConfig`)

const getAllUsers = async () => {
    try {
        const allUsers = await db.any('SELECT * FROM users')
        return allUsers; 
    } catch (error) {
        return error
    }
}

//show a User

const getAUser = async (id) => {
    try {
        const user = await db.one('SELECT * FROM users WHERE id=$1', id)
        return user
    } catch (error) {
        return error
    }
}

//create a user
const createUser = async (userToAdd) => {
    try {
        const newUser = await db.one('INSERT INTO users (username, password, zipcode, email) VALUES ($1, $2, $3, $4) RETURNING *', [userToAdd.username, userToAdd.password, userToAdd.zipcode, userToAdd.email])
        return newUser
    } catch (error) {
        return error
    }
}

//delete user
const deleteUser = async (id) => {
    try {
        const deletedUser = await db.one('DELETE FROM users WHERE id=$1 RETURNING *', id)
        return deletedUser
    }catch (error) {
        return error
    }
}

//update user
const updateUser = async (id, user) => {
    try {
        const updatedUser = await db.one('UPDATE users SET username=$1, password=$2, zipcode=$3, email=$4 WHERE id=$5 RETURNING *', [user.username, user.password, user.zipcode, user.email, id])

        return updatedUser
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllUsers,
    getAUser,
    createUser,
    deleteUser,
    updateUser
}