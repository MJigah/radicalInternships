const express = require('express');
const asyncHandler = require('express-async-handler');
const {addUserIntern} = require('../controllers/userInternship');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *        type: object
 *        required:
 *          - user_id
 *          - internship_id
 *        properties:
 *          user_id:
 *            type: String
 *            description: The Id of the user
 *          internship_id:
 *            type: String
 *            description: The Id of the internship
 *        example:
 *          user_id: "String"
 *          internship_id: 'String'
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
 * '/api/uintern/':
 *  post:
 *   summary: Get User details
 *   tags: [User]
 *   requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *        required:
 *          - user_id
 *          - internship_id
 *        example:
 *          user_id: "String"
 *          internship_id: 'String'
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


router.post("/", addUserIntern);

module.exports = router;