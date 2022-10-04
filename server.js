require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//import routes
const authRoute = require('./src/routes/auth');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/api', (req, res) => {
    res.send('Express Server React Blog');
});

app.post('/name', (req, res) => {
    if (req.body.name) {
        return res.json({ name: req.body.name });
    } else {
        return res.status(400).json({ error: 'No name provided' });
    }
});

app.use('/api/auth', authRoute);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
