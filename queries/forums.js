const db = require(`../db/dbConfig`)

// const getAllForums = async () => {
//     try {
//         const allForums = await db.any('SELECT * FROM forums')
//         return allForums; 
//     } catch (error) {
//         return error
//     }
// }
const getAllForums = async () => {
  try {
    const allForums = await db.any('SELECT *, to_char(date, \'MM-DD-YY\') as formatted_date FROM forums');
    return allForums.map((forum) => ({
      ...forum,
      date: forum.formatted_date, // Replace the date property with the formatted date
    }));
  } catch (error) {
    return error;
  }
};

//show a forum

const getAForum = async (id) => {
    try {
        const forum = await db.one('SELECT * FROM forums WHERE id=$1', id)
        return forum
    } catch (error) {
        return error
    }
}

//create a forum
const createForum = async (forumToAdd) => {
    try {
        const newForum = await db.one('INSERT INTO forums (user_id, title, content, date, category) VALUES ($1, $2, $3, $4, $5) RETURNING *', [forumToAdd.user_id, forumToAdd.title, forumToAdd.content, forumToAdd.date, forumToAdd.category]);
        return newForum;
    
    } catch (error) {
        return error
    }
}

//delete forum
const deleteForum = async (id) => {
    try {
        const deletedForum = await db.one('DELETE FROM forums WHERE id=$1 RETURNING *', id)
        return deletedForum
    }catch (error) {
        return error
    }
}

//update forum
const updateForum = async (id, forum) => {
    try {
        const updatedForum = await db.one('UPDATE forums SET user_id=$1, title=$2, content=$3, date=$4, category=$5 WHERE id=$6 RETURNING *', [forum.user_id, forum.title, forum.content, forum.date, forum.category, id])

        return updatedForum
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllForums,
    getAForum,
    createForum,
    deleteForum,
    updateForum
}