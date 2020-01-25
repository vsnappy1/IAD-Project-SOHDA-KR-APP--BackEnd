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

module.exports = MessageSchema;
