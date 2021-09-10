const express = require('express');
const routes = require('./app/routes');



const app = express();
const port = process.env.port || 3000;


routes(app);


app.listen(port,(error)=>{

    if(error) console.log(error)
    else console.log("Server on")
    
})

module.exports =  app;