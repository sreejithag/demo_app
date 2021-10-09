const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    phone:{
        type:Number,
        required:true
    },
    intro:{
        type:String,
        required:true
    },
    experiance:{
        type:Number,
        required:true
    },
    achivements:{
        type:String,
        required:true
    }

})

const Data = mongoose.model("Data",dataSchema);
module.exports = Data;