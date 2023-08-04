const express = require('express')
const mongoose = require('mongoose')
const User = require('./user.model')



mongoose.connect('mongodb+srv://marcel:12345@cluster0.vsfi8s4.mongodb.net/MyFirstDatabase')
    .then(() => console.log('mongoose connected'))
    .catch((err) => console.log('Mongo DB is not working..', err))

const app = express()

app.get("/api/all", (req, res) => {
    User.find()
        .then((element) => {
            console.log(element)
            res.send(element)
        })
        .catch((err) => console.log("Cannot find users", err))
});


app.use(express.json()); // To parse JSON-encoded bodies

app.post("/api/create", (req, res) => {
    let data = req.body

    const newUser = new User(data)
    newUser.save()
        .then((saveResponse) => {
            console.log('User has been created', saveResponse)
            res.send(saveResponse)
        })
        .catch((err) => console.log('User was not created', err))
})

app.delete("/api/delete", (req, res) => {
    let data = req.body

    User.findByIdAndDelete(data.id)
    .then ((success) => {
        console.log("element has been deleted", success)
        res.send("element has been deleted")
    })
    .catch((err)=>{
        res.send("error", err)
    })
});


app.listen(3000, () => {
    console.log('server is running on port 3000...');
})
