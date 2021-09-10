const express = require('express');
const contas =  require('./contaRoute')
const cors = require('cors')



module.exports = app => {

     app.use(cors())
     app.use(express.json());
     app.use(contas);
   

}
