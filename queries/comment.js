const db = require(`../db/dbConfig`)

// queries goes in hand for the database this is psql
// sending it to controllers

// index of all comments
//schema/seed change to plural comments?

const GET_ALL_COMMENTS = async () => {
    try {
        const ALL_COMMENTS = await db.any(`SELECT * FROM comment`)
        return ALL_COMMENTS; 
    } catch (error) {
        return error
    }
}

//show a comment

const GET_A_COMMENT = async (id) => {
    try {
        const COMMENT = await db.one(`SELECT * FROM comment WHERE id=$1`, id)
        return COMMENT
    } catch (error) {
        return error
    }
}

//create a comment
const CREATE_COMMENT = async (commentToAdd) => {
    try {
        const NEW_COMMENT = await db.one(`INSERT INTO comment post_id, user_id, content, date) VALUES ($1, $2, $3, $4)` [commentToAdd.post_id, commentToAdd.user_id, commentToAdd.content, commentToAdd.date])
        return NEW_COMMENT
    } catch (error) {
        return error
    }
}

//delete comment
const DELETE_COMMENT = async (id) => {
    try {
        const DELETED_COMMENT = await db.one(`DELETE FROM comment WHERE id=$1 RETURNING *`, id)
        return DELETED_COMMENT
    }catch (error) {
        return error
    }
}

//update comment
const UPDATE_COMMENT = async (id, comment) => {
    try {
        const UPDATED_COMMENT = await db.one(`UPDATE comment SET post_id=$1, user_id=$2, content=$3, date=$4, WHERE id=$5 RETURNING *`, [comment.post_id, comment.user_id, comment.content, comment.date, id])

        return UPDATED_COMMENT
    } catch (error) {
        return error
    }
}

module.exports = {
    GET_ALL_COMMENTS,
    GET_A_COMMENT,
    CREATE_COMMENT,
    DELETE_COMMENT,
    UPDATE_COMMENT
}