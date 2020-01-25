const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema for user
const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    user_name:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    ad_id:[String],

    chat_id:[String]

});

const User = mongoose.model('user',UserSchema);

module.exports = User;