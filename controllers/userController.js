const db = require('../config/db');
const { collection, addDoc } = require("firebase/firestore")
const User = require('../models/User');

const addUser = async(req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'User'), data)
        res.send('User added successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addUser
}