const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Mesesage Schemea
const MessageSchema = new Schema({

    user_id: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }

    //TODO add date and time field
});


//Create Schema for Chat
const ChatSchema = new Schema({

    user1_id: {
        type: String,
        required: true
    },

    user2_id:{
        type: String,
        required: true
    },

    messages : [MessageSchema]

});

const User = mongoose.model('chat',ChatSchema);

module.exports = User;