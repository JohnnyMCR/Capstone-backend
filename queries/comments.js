const db = require(`../db/dbConfig`)

const getAllComments = async (post_id) => {
    console.log(post_id)
    try {
        const allComments = await db.any('SELECT comments.*, profiles.username AS username FROM comments JOIN profiles ON comments.user_id=profiles.id WHERE comments.post_id = $1;', post_id)
        // const allComments = await db.any('SELECT * FROM comments')
        console.log(allComments)
        return allComments; 
    } catch (error) {
        return error
    }
}

//show a comment

const getAComment = async (id) => {
    try {
        const comment = await db.one('SELECT * FROM comments WHERE id=$1', id)
        return comment
    } catch (error) {
        return error
    }
}

//create a comment
const createComment = async (commentToAdd) => {
    try {
        const newComment = await db.one('INSERT INTO comments (post_id, user_id, content, date) VALUES ($1, $2, $3, $4) RETURNING *', [commentToAdd.post_id, commentToAdd.user_id, commentToAdd.content, commentToAdd.date])
        return newComment
    } catch (error) {
        return error
    }
}

//delete comment
const deleteComment = async (id) => {
    try {
        const deletedComment = await db.one('DELETE FROM comments WHERE id=$1 RETURNING *', id)
        return deletedComment
    }catch (error) {
        return error
    }
}

//update comment
const updateComment = async (id, comment) => {
    try {
        const updatedComment = await db.one('UPDATE comments SET post_id=$1, user_id=$2, content=$3, date=$4 WHERE id=$5 RETURNING *', [comment.post_id, comment.user_id, comment.content, comment.date, id])

        return updatedComment
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllComments,
    getAComment,
    createComment,
    deleteComment,
    updateComment
}