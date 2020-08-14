const express = require('express');
const funcionarioDB = require('../models/funcionario'); 

module.exports = (app)=>{
    var router = express.Router();

    router.post('/',(req,res,next)=>{
        const funcionario = new funcionarioDB(req.body);

        funcionario.save(funcionario)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({msg: 'erro ao salvar dados!'});
        })
        
    });

    router.put('/:id',(req,res,next)=>{
        var id = req.params.id;

        funcionarioDB.findByIdAndUpdate({_id: id},req.body)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({msg: 'erro ao salvar dados!'});
        })
        
    });

    router.get('/',(req,res,next)=>{
        funcionarioDB.find().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: 'erro'});
        })
        //res.status(200).send({msg: 'API funcionando!'});
    });

    router.delete('/:id',(req,res,next)=>{
        var id = req.params.id;
        funcionarioDB.deleteOne({_id: id}).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({message: 'erro'});
        })
        //res.status(200).send({msg: 'API funcionando!'});
    });

    app.use('/funcionarios',router);
}