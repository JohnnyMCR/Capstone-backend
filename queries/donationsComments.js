const db = require(`../db/dbConfig`)

// queries goes in hand for the database this is psql
// sending it to controllers

// index of all donation comments


const getAllDonationsComments = async () => {
    try {
        const allDonationsComments = await db.any(`SELECT * FROM donations_comments`)
        return allDonationsComments; 
    } catch (error) {
        return error
    }
}

//show a donation comment

const getADonationsComment = async (id) => {
    try {
        const donationsComment = await db.one(`SELECT * FROM donations_comments WHERE id=$1`, id)
        return donationsComment
    } catch (error) {
        return error
    }
}

//create a donation comment
const createDonationsComment = async (commentToAdd) => {
    try {
        const newDonationsComment = await db.one(`INSERT INTO donations_comments (donation_post_id, user_id, content, date) VALUES ($1, $2, $3, $4)` [commentToAdd.donation_post_id, commentToAdd.user_id, commentToAdd.content, commentToAdd.date])
        return newDonationsComment
    } catch (error) {
        return error
    }
}

//delete donation comment
const deleteDonationsComment = async (id) => {
    try {
        const deletedDonationsComment = await db.one(`DELETE FROM donations_comments WHERE id=$1 RETURNING *`, id)
        return deletedDonationsComment
    }catch (error) {
        return error
    }
}

//update comment
const updateDonationsComment = async (id, comment) => {
    try {
        const updatedDonationsComment = await db.one(`UPDATE donations_comments SET donation_post_id=$1, user_id=$2, content=$3, date=$4 WHERE id=$5 RETURNING *`, [comment.donations_post_id, comment.user_id, comment.content, comment.date, id])

        return updatedDonationsComment
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllDonationsComments,
    getADonationsComment,
    createDonationsComment,
    deleteDonationsComment,
    updateDonationsComment
}