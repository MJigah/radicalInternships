const db = require('../config/db');
const { collection, addDoc } = require("firebase/firestore")
const User = require('../models/User');

const addInternship = async(req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'Internship'), data)
        res.send('Internship added successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addInternship
}