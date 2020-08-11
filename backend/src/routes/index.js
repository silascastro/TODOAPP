const express = require('express');

module.exports = (app)=>{
    var router = express.Router();

    router.get('/',(req,res,next)=>{
        res.status(200).send({msg: 'API funcionando!'});
    });


    app.use('/',router);
}