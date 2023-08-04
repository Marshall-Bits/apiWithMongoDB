const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://marcel:12345@cluster0.vsfi8s4.mongodb.net/MyFirstDatabase')
    .then(() => console.log('mongoose connected'))
    .catch((err)=> console.log('Mongo DB is not working..'))


const app = express()

app.listen(3000, () => {
    console.log('server is running on port 3000...');
})