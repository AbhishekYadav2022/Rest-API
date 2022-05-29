// If 'npm i express' thows error, first run 'npm cache clear --force' and then install it.

const express = require('express');
require("./db/connection");
const Student = require("./models/students");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

// Registering a new student 
app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
