const db = require('../config/db');
const { collection, addDoc } = require("firebase/firestore")
const User = require('../models/User');

const addInternship = async(req, res, next) => {
    try {
        const {internship_description, internship_guide, internship_survey, internship_settings} = req.body;
        const {category, description, location, benefits, intro_video, mentor_details, recommended_roles, w_link} = internship_description;
        const {overview, schedule, resources} = internship_guide;
        const [survey1] = survey;
        const {basic_settings, hero_image} = internship_settings;
        const data = {
            internship_description, 
            internship_guide, 
            internship_survey, 
            internship_settings,
            active: true
        }
        await addDoc(collection(db, 'Internship'), data)
        res.send('Internship added successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addInternship
}