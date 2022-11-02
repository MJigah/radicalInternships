const express = require('express');
const asyncHandler = require('express-async-handler');
const {addInternship} = require('../controllers/internController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Internship:
 *        type: object
 *        required:
 *          - internship_description
 *          - active
 *          - internship_survey
 *          - internship_guide
 *          - internship_setting
 *        properties:
 *          internship_description:
 *            type: Object
 *            description: The description of the internship
 *          active:
 *            type: Boolean
 *            description: The status of the internship
 *          internship_guide:
 *            type: Object
 *            description: The guide of the Internship
 *          internship_survey:
 *            type: Object
 *            description: The survey of the Intenship
 *          internship_setting:
 *            type: Object
 *            description: The Setting of the internship
 */

//GET: seed to db
router.get(
    "/seed",
    asyncHandler(async (req, res) => {
      res.send({message: "No data to seed"});
    })
  );

/**
 * @swagger
 * '/api/intern/':
 *  post:
 *   summary: Create New Intern Data
 *   tags: [Internship]
 *   requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *        required:
 *          - internship_description
 *          - active
 *          - internship_survey
 *          - internship_guide
 *          - internship_setting
 *        example:
 *          internship_description: {}
 *          active: false
 *          internship_survey: {}
 *          internship_guide: {}
 *          internship_setting: {}
 *   responses:
 *     200:
 *      description: The Users are displayed successfully
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *     404:
 *      description: Not Found
 *     500:
 *      description: Server Error
 *
 */


router.post("/", addInternship);

module.exports = router;