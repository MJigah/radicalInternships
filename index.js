const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000
const data = require('./data.json')

app.use(cors());
app.get('/', (req, res) => {
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})