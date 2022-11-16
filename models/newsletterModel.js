const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true
    // },
   
    email:{
        type:String,
        required:true
    },
    
    verify:{
        type:String,
        default:0
    },
    
   
    
})


module.exports = mongoose.model('Newsletters',newsletterSchema);