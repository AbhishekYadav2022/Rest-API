// If 'npm i express' thows error, first run 'npm cache clear --force' and then install it.

const express = require('express');
require("./db/connection");
const Student = require("./models/students");
const app = express();
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Registering a new student 
app.post("/coders", (req, res) => {
    console.log(req.body);
    const user = new Student({
        name: req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        address:req.body.address
    });
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
})

app.get("/coders", (req, res) => {
    res.send("Hello students")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
