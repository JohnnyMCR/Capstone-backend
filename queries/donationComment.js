const db = require(`../db/dbConfig`)

// queries goes in hand for the database this is psql
// sending it to controllers

// index of all donation comments
//schema/seed change to plural comments?

const GET_ALL_DONATIONS_COMMENTS = async () => {
    try {
        const ALL_DONATIONS_COMMENTS = await db.any(`SELECT * FROM donations_comment`)
        return ALL_DONATIONS_COMMENTS; 
    } catch (error) {
        return error
    }
}

//show a donation comment

const GET_A_DONATIONS_COMMENT = async (id) => {
    try {
        const DONATIONS_COMMENT = await db.one(`SELECT * FROM donations_comment WHERE id=$1`, id)
        return DONATIONS_COMMENT
    } catch (error) {
        return error
    }
}

//create a donation comment
const CREATE_DONATIONS_COMMENT = async (commentToAdd) => {
    try {
        const NEW_DONATIONS_COMMENT = await db.one(`INSERT INTO donations_comment (donation_post_id, user_id, content, date) VALUES ($1, $2, $3, $4)` [commentToAdd.donation_post_id, commentToAdd.user_id, commentToAdd.content, commentToAdd.date])
        return NEW_DONATIONS_COMMENT
    } catch (error) {
        return error
    }
}

//delete donation comment
const DELETE_DONATIONS_COMMENT = async (id) => {
    try {
        const DELETED_DONATIONS_COMMENT = await db.one(`DELETE FROM comment WHERE id=$1 RETURNING *`, id)
        return DELETED_COMMENT
    }catch (error) {
        return error
    }
}

//update comment
const UPDATE_DONATIONS_COMMENT = async (id, comment) => {
    try {
        const UPDATED_DONATIONS_COMMENT = await db.one(`UPDATE donations_comment SET donation_post_id=$1, user_id=$2, content=$3, date=$4, WHERE id=$5 RETURNING *`, [comment.donations_post_id, comment.user_id, comment.content, comment.date, id])

        return UPDATED_DONATIONS_COMMENT
    } catch (error) {
        return error
    }
}

module.exports = {
    GET_ALL_DONATIONS_COMMENTS,
    GET_A_DONATIONS_COMMENT,
    CREATE_DONATIONS_COMMENT,
    DELETE_DONATIONS_COMMENT,
    UPDATE_DONATIONS_COMMENT
}