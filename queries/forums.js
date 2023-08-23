const db = require(`../db/dbConfig`)

// queries goes in hand for the database this is psql
// sending it to controllers

// index of all forums

const GET_ALL_FORUMS = async () => {
    try {
        const ALL_FORUMS = await db.any(`SELECT * FROM forums`)
        return ALL_FORUMS; 
    } catch (error) {
        return error
    }
}

//show a forum

const GET_A_FORUM = async (id) => {
    try {
        const FORUM = await db.one(`SELECT * FROM forums WHERE id=$1`, id)
        return FORUM
    } catch (error) {
        return error
    }
}

//create a forum
const CREATE_FORUM = async (forumToAdd) => {
    try {
        const NEW_FORUM = await db.one(`INSERT INTO forums user_id, title, content, date, category) VALUES ($1, $2, $3, $4, $5)` [forumToAdd.user_id, forumToAdd.title, forumToAdd.content, forumToAdd.date, forumToAdd.category])
        return NEW_FORUM
    } catch (error) {
        return error
    }
}

//delete forum
const DELETE_FORUM = async (id) => {
    try {
        const DELETED_FORUM = await db.one(`DELETE FROM forums WHERE id=$1 RETURNING *`, id)
        return DELETED_FORUM
    }catch (error) {
        return error
    }
}

//update forum
const UPDATE_FORUM = async (id, forum) => {
    try {
        const UPDATED_FORUM = await db.one(`UPDATE forums SET user_id=$1, title=$2, content=$3, date=$4, category=$5, WHERE id=$6 RETURNING *`, [forum.user_id, forum.title, donation.content, forum.date, forum.category, id])

        return UPDATED_FORUM
    } catch (error) {
        return error
    }
}

module.exports = {
    GET_ALL_FORUMS,
    GET_A_FORUM,
    CREATE_FORUM,
    DELETE_FORUM,
    UPDATE_FORUM
}