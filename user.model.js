const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }

});

// with User we are referring to the collection in mongoDB

const User = mongoose.model( 'User' , userSchema);

module.exports = User
