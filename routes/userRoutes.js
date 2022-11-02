const express = require('express');
const asyncHandler = require('express-async-handler');
const {addUser} = require('../controllers/userController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: String
 *            description: The Email of the user
 *          password:
 *            type: String
 *            description: The Password of the user
 *        example:
 *          email: "String"
 *          password: 'String'
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
 * '/api/user/':
 *  post:
 *   summary: Create New User data
 *   tags: [User]
 *   requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *        required:
 *          - email
 *          - password
 *        example:
 *          email: "String"
 *          password: 'String'
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


router.post("/", addUser);

module.exports = router;