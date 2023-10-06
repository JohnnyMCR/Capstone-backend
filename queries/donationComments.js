const db = require(`../db/dbConfig`)

const getAllDonationsComments = async (donations_id) => {
    try {
        const allDonationsComments = await db.any('SELECT donations_comments.*, users.username AS username FROM donations_comments JOIN users ON donations_comments.user_id=users.id WHERE donations_comments.donations_id = $1', donations_id);
        console.log(allDonationsComments)

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
const createDonationsComment = async (donationCommentToAdd) => {
    try {
        const newDonationsComment = await db.one(`INSERT INTO donations_comments (donations_id, user_id, content, date) VALUES ($1, $2, $3, $4) RETURNING *`, [donationCommentToAdd.donations_id, donationCommentToAdd.user_id, donationCommentToAdd.content, donationCommentToAdd.date])
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
const updateDonationsComment = async (id, donationComment) => {
    try {
        const updatedDonationsComment = await db.one(`UPDATE donations_comments SET donations_id=$1, user_id=$2, content=$3, date=$4 WHERE id=$5 RETURNING *`, [donationComment.donations_id, donationComment.user_id, donationComment.content, donationComment.date, id])

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