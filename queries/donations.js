const db = require(`../db/dbConfig`)

// queries goes in hand for the database this is psql
// sending it to controllers

// index of all donations

const GET_ALL_DONATIONS = async () => {
    try {
        const ALL_DONATIONS = await db.any(`SELECT * FROM donations`)
        return ALL_DONATIONS; 
    } catch (error) {
        return error
    }
}

//show a donation

const GET_A_DONATION = async (id) => {
    try {
        const DONATION = await db.one(`SELECT * FROM donations WHERE id=$1`, id)
        return DONATION
    } catch (error) {
        return error
    }
}

//create a donation
const CREATE_DONATION = async (donationToAdd) => {
    try {
        const NEW_DONATION = await db.one(`INSERT INTO donations user_id, category, title, description, date, img) VALUES ($1, $2, $3, $4, $5, $6, $7)` [donationToAdd.user_id, donationToAdd.category, donationToAdd.title, donationToAdd.description, donationToAdd.date, donationToAdd.img])
        return NEW_DONATION
    } catch (error) {
        return error
    }
}

//delete donation
const DELETE_DONATION = async (id) => {
    try {
        const DELETED_DONATION = await db.one(`DELETE FROM donations WHERE id=$1 RETURNING *`, id)
        return DELETED_DONATION
    }catch (error) {
        return error
    }
}

//update donation
const UPDATE_DONATION = async (id, donation) => {
    try {
        const UPDATED_DONATION = await db.one(`UPDATE donations SET user_id=$1, category=$2, title=$3, description=$4, date=$5, donation=$6 WHERE id=$7 RETURNING *`, [donation.user_id, donation.category, donation.title, donation.description, donation.date, id])

        return UPDATED_DONATION
    } catch (error) {
        return error
    }
}

module.exports = {
    GET_ALL_DONATIONS,
    GET_A_DONATION,
    CREATE_DONATION,
    DELETE_DONATION,
    UPDATE_DONATION
}