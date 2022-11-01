const db = require('../config/db');
const { collection, addDoc } = require("firebase/firestore")
const UserInternship = require('../models/userIntership');

const addUserIntern = async(req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, UserInternship), data)
        res.send('User added successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addUserIntern
}