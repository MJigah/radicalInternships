const express = require("express");
const cors = require("cors");
require("dotenv").config();
const data = require("./data.json");
const fs = require("fs");
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')
const userRoutes = require('./routes/userRoutes')
const UInternRoutes = require('./routes/UInternshipRoutes')
const PORT = process.env.PORT || 3000;

const app = express();

const options = {
  definition: {
      openapi: '3.0.0',
      info: {
          title: 'Internship API',
          version: '1.0.0', 
          description: 'RadicalX Internship API docs'
      },
      servers: [
          {
              url: 'http://localhost:3000/'
          }
      ],
      components: {
          securitySchemes:
          {
              bearerAuth:{
                  type: 'http',
                  scheme: 'bearer',
                  bearerFormat: 'JWT'
              }
          }
      },
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options)
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

//====== SETUP ROUTES ======================================
app.use('/api/user', userRoutes)
app.use('/api/user', UInternRoutes)
//==========================================================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
