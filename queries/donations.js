const db = require(`../db/dbConfig`)

// queries goes in hand for the database this is psql
// sending it to controllers

// index of all donations

const getAllDonations = async () => {
    try {
        const allDonations = await db.any(`SELECT * FROM donations`)
        return allDonations; 
    } catch (error) {
        return error
    }
}

//show a donation

const getADonation = async (id) => {
    try {
        const donation = await db.one(`SELECT * FROM donations WHERE id=$1`, id)
        return donation
    } catch (error) {
        return error
    }
}

//create a donation
const createDonation = async (donationToAdd) => {
    try {
        const newDonation = await db.one(`INSERT INTO donations (profile_id, category, title, description, date, img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [donationToAdd.profile_id, donationToAdd.category, donationToAdd.title, donationToAdd.description, donationToAdd.date, donationToAdd.img])
        return newDonation
    } catch (error) {
        return error
    }
}

//delete donation
const deleteDonation = async (id) => {
    try {
        const deletedDonation = await db.one(`DELETE FROM donations WHERE id=$1 RETURNING *`, id)
        return deletedDonation
    } catch (error) {
        return error
    }
}

//update donation
const updateDonation = async (id, donation) => {
    try {
        const updatedDonation = await db.one(`UPDATE donations SET profile_id=$1, category=$2, title=$3, description=$4, date=$5, img=$6 WHERE id=$7 RETURNING *`, [donation.profile_id, donation.category, donation.title, donation.description, donation.date, donation.img, id])

        return updatedDonation
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllDonations,
    getADonation,
    createDonation,
    deleteDonation,
    updateDonation
}