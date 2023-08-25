const db = require(`../db/dbConfig`)

// queries goes in hand for the database this is psql
// sending it to controllers

// index of all profiles

const GET_ALL_PROFILES = async () => {
    try {
        const ALL_PROFILES = await db.any(`SELECT * FROM profile`)
        return ALL_PROFILES; 
    } catch (error) {
        return error
    }
}

//show a profile

const GET_A_PROFILE = async (id) => {
    try {
        const PROFILE = await db.one(`SELECT * FROM profile WHERE id=$1`, id)
        return PROFILE
    } catch (error) {
        return error
    }
}

//create a profile
const CREATE_PROFILE = async (profileToAdd) => {
    try {
        const NEW_PROFILE = await db.one(`INSERT INTO profile username, password, address, email) VALUES ($1, $2, $3, $4)` [profileToAdd.username, profileToAdd.password, profileToAdd.address, profileToAdd.email])
        return NEW_PROFILE
    } catch (error) {
        return error
    }
}

//delete profile
const DELETE_PROFILE = async (id) => {
    try {
        const DELETED_PROFILE = await db.one(`DELETE FROM profile WHERE id=$1 RETURNING *`, id)
        return DELETED_PROFILE
    }catch (error) {
        return error
    }
}

//update profile
const UPDATE_PROFILE = async (id, profile) => {
    try {
        const UPDATED_PROFILE = await db.one(`UPDATE profile SET username=$1, password=$2, address=$3, email=$4 WHERE id=$5 RETURNING *`, [profile.username, profile.password, profile.address, profile.email, id])

        return UPDATED_PROFILE
    } catch (error) {
        return error
    }
}

module.exports = {
    GET_ALL_PROFILES,
    GET_A_PROFILE,
    CREATE_PROFILE,
    DELETE_PROFILE,
    UPDATE_PROFILE
}