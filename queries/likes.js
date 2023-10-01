const db = require(`../db/dbConfig`)

const getAllLikes = async () => {
    try {
        const allLikes = await db.any(`SELECT * FROM likes`)
        return allLikes; 
    } catch (error) {
        return error
    }
}

//show a likes

const getALike = async (id) => {
    try {
        const like = await db.one(`SELECT * FROM likes WHERE id=$1`, id)
        return like
    } catch (error) {
        return error
    }
}

//create a like
const createLike = async (likeToAdd) => {
    try {
        const newLike = await db.one(`INSERT INTO likes (forum_id, user_id) VALUES ($1, $2) RETURNING *` [likeToAdd.forum_id, likeToAdd.user_id])
        return newLike
    } catch (error) {
        return error
    }
}

//delete like
const deleteLike = async (id) => {
    try {
        const deletedLike = await db.one(`DELETE FROM likes WHERE id=$1 RETURNING *`, id)
        return deletedLike
    } catch (error) {
        return error
    }
}

//update like
const updateLike = async (id, like) => {
    try {
        const updatedLike = await db.one(`UPDATE likes SET forum_id=$1, user_id=$2 WHERE id=$3 RETURNING *`, [like.forum_id, like.user_id, id])

        return updatedLike
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllLikes,
    getALike,
    createLike,
    deleteLike,
    updateLike
}