const db = require(`../db/dbConfig`)

// queries goes in hand for the database this is psql
// sending it to controllers

// index of all profiles

const getAllProfiles = async () => {
    try {
        const allProfiles = await db.any(`SELECT * FROM profiles`)
        return allProfiles; 
    } catch (error) {
        return error
    }
}

//show a profile

const getAProfile = async (id) => {
    try {
        const profile = await db.one(`SELECT * FROM profiles WHERE id=$1`, id)
        return profile
    } catch (error) {
        return error
    }
}

//create a profile
const createProfile = async (profileToAdd) => {
    try {
        const newProfile = await db.one(`INSERT INTO profiles (username, password, address, email) VALUES ($1, $2, $3, $4)` [profileToAdd.username, profileToAdd.password, profileToAdd.address, profileToAdd.email])
        return newProfile
    } catch (error) {
        return error
    }
}

//delete profile
const deleteProfile = async (id) => {
    try {
        const deletedProfile = await db.one(`DELETE FROM profiles WHERE id=$1 RETURNING *`, id)
        return deletedProfile
    }catch (error) {
        return error
    }
}

//update profile
const updateProfile = async (id, profile) => {
    try {
        const updatedProfile = await db.one(`UPDATE profiles SET username=$1, password=$2, address=$3, email=$4 WHERE id=$5 RETURNING *`, [profile.username, profile.password, profile.address, profile.email, id])

        return updatedProfile
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllProfiles,
    getAProfile,
    createProfile,
    deleteProfile,
    updateProfile
}