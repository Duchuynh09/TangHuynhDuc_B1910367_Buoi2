const { Schema, default: mongoose } = require('mongoose')

const schema = new Schema({
    email:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
})

const ContactModel = mongoose.model('contact',schema)
module.exports =  ContactModel
