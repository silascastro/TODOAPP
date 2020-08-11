var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
  app.use(cors());
  

app.listen('4100', ()=>{
    console.log("API rodando!");
});

require('./src/models/funcionario');

mongoose.connect('mongodb+srv://masterkey:qwert123@cluster0.vuvde.gcp.mongodb.net/todoapp?retryWrites=true&w=majority',{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(express.json());


require('./src/routes/index')(app);
require('./src/routes/funcionario')(app);

/*app.get('/', (req,res,next)=>{
    res.status(200).send({msg: 'API funcionando!'});
})*/
