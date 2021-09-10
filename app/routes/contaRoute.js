const express = require('express')
const ContaPessoa = require('../controllers/ContaPessoa');

const router = express.Router();


router.get('/contas', ContaPessoa.pegaTodasContas);
router.get('/conta/:id',ContaPessoa.pegaUmaConta);
router.post('/cadastro',ContaPessoa.criaConta);
router.put('/conta/:id',ContaPessoa.atualizePessoa);
router.post('/login',ContaPessoa.loginConta);
router.delete('/conta/:id',ContaPessoa.contaDeleta)



module.exports = router;