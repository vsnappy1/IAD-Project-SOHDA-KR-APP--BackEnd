const express = require('express');
const routes = express.Router();
const User = require('../models/user');
const Ad = require('../models/ad');
const Chat = require('../models/chat');
const MessageSchema = require('../models/message');


// For Handeling user related requests
routes.get('/user/:id',function(req,res,next){
    User.findOne({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});

//This wont be used in pratical implementation
routes.get('/user',function(req,res,next){
    User.find({}).then(function(user){
        res.send(user);
    }).catch(next);
});

routes.post('/user',function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

routes.put('/user/:id',function(req,res,next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
    }).catch(next);
});

routes.delete('/user/:id',function(req,res,next){
    User.findByIdAndDelete({_id: req.params.id}, req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

// For adding a new ad id to some user's ad_id field
routes.post('/user/add_ad_id/:id',function(req,res,next){
    User.findOne({_id: req.params.id}).then(function(user){
        user.ad_id.push(req.body.ad_id);
        user.save();
        res.send({ad_id: req.body.ad_id});
    }).catch(next);
});

// For adding a new chat id to some user's chat_id field
routes.post('/user/add_chat_id/:id',function(req,res,next){
    User.findOne({_id: req.params.id}).then(function(user){
        user.ad_id.push(req.body.chat_id);
        user.save();
        res.send({ad_id: req.body.chat_id});
    }).catch(next);
});


// For deleting an ad id form some user's ad_id field
routes.post('/user/delete_ad_id/:id',function(req,res,next){
    User.findOne({_id: req.params.id}).then(function(user){
        user.ad_id.pull(req.body.ad_id)
        user.save();
        res.send({ad_id: req.body.ad_id});
    }).catch(next);
});

// For deleting an chat id form some user's chat_id field
routes.post('/user/delete_chat_id/:id',function(req,res,next){
    User.findOne({_id: req.params.id}).then(function(user){
        user.chat_id.pull(req.body.chat_id)
        user.save();
        res.send({ad_id: req.body.chat_id});
    }).catch(next);
});

// For Handeling ad related requests
routes.get('/ad/:id',function(req,res,next){
    Ad.findOne({_id: req.params.id}).then(function(ad){
        res.send(ad);
    }).catch(next);
})

routes.get('/ad',function(req,res,next){
    Ad.find({}).then(function(ad){
        res.send(ad);
    }).catch(next);
});

routes.post('/ad',function(req,res,next){
    Ad.create(req.body).then(function(ad){
        res.send(ad);
        // Get the _id and save in users ad_id field
        console.log(ad._id);
    }).catch(next);
});

routes.put('/ad/:id',function(req,res,next){
    Ad.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ad.findOne({_id: req.params.id}).then(function(ad){
            res.send(ad);
        });
    }).catch(next);
});

routes.delete('/ad/:id',function(req,res,next){
    Ad.findByIdAndDelete({_id: req.params.id}, req.body).then(function(ad){
        res.send(ad);
    }).catch(next);
});

// For Handeling chat related requests
routes.get('/chat/:id',function(req,res,next){
    Chat.findOne({_id: req.params.id}).then(function(chat){
        res.send(chat);
    }).catch(next);
})


//This wont be used in pratical implementation
routes.get('/chat',function(req,res,next){
    Chat.find({}).then(function(chat){
        res.send(chat);
    }).catch(next);
});

routes.post('/chat',function(req,res,next){
    Chat.create(req.body).then(function(chat){
        res.send(chat);
        // Get the _id and save in users chat_id field
        console.log(chat._id);
    }).catch(next);
});

routes.put('/chat/:id',function(req,res,next){
    Chat.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Chat.findOne({_id: req.params.id}).then(function(chat){
            res.send(chat);
        });
    }).catch(next);
});

routes.delete('/chat/:id',function(req,res,next){
    Chat.findByIdAndDelete({_id: req.params.id}, req.body).then(function(chat){
        res.send(chat);
    }).catch(next);
});

// For adding a new message to some chat's messages field
routes.post('/chat/add_message/:id',function(req,res,next){
    Chat.findOne({_id: req.params.id}).then(function(chat){

        var message = {"user_id":req.body.user_id, "message":req.body.message};
        chat.messages.push(message);
        chat.save();
        res.send(message);
    }).catch(next);
});

module.exports = routes;