const mongoose = require("mongoose");

var schema = mongoose.Schema({
    name: String,
    job: String    
},{timestamps: true});

module.exports = mongoose.model('funcionario',schema);
