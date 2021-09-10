const database = require("../models");
const bcrypt = require("bcryptjs");
const e = require("express");

class ContaPessoa {
  //Pega todas as contas
  static async pegaTodasContas(req, res) {
    try {
      const todasAsContas = await database.ContaPessoa.findAll();
      return res.status(200).json(todasAsContas);
    } catch (err) {
      res.status(500).json(console.log(err));
    }
  }

  //Pega uma conta
  static async pegaUmaConta(req, res) {
    const { id } = req.params;
    try {
      const umaConta = await database.ContaPessoa.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(umaConta);
    } catch (err) {
      res.status(500).json(console.log(err));
    }
  }

  //Criar uma conta
  static async criaConta(req, res) {
    try {

      const { nome, email, senha } = req.body;

      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(senha, salt);

      const criaConta = await database.ContaPessoa.create({
        nome: nome,
        email: email,
        senha: hash,
      });
      return res.status(201).json(criaConta);
    
    } catch (error) {
      res.status(500).json(console.log(error.message));
    }
  }

  
  // Login na conta
  static async loginConta(req, res) {
    try {

      //Valores do input
      const { email, senha } = req.body;

      //Busca as informaçoes no DB pelo email
      const user = await database.ContaPessoa.findOne({
        where: {
          email,
        },
      }); 
       //Se nao tiver user cadastrado no banco fica aqui
      if (!user)
        return res.status(404).send({ message: "Usuario nao encontrado" });
     //Caso ao contrario entra aqui , compara a hash com a senha e se for true entrar no if e manda o json para o Front
      else {
        const validarSenhar = await bcrypt.compareSync(senha, user.senha);

        if (validarSenhar) {
          return res.status(200).json({ user });
        }
      }
    } catch (err) {
      res.status(500).json(console.log(err.message));
    }
  }

  //Atualiza um registro
  static async atualizePessoa(req, res) {
    const novaInfos = req.body;
    const { id } = req.params;

    try {
      await database.ContaPessoa.update(novaInfos, {
        where: { id: Number(id) },
      });

      const pessoasAtualizada = await database.ContaPessoa.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(pessoasAtualizada);
    } catch (error) {
      res.status(500).json(console.log(error.message));
    }
  }

  //Deleta

  static async contaDeleta(req, res) {
    const { id } = req.params;
    try {
      const deleta = await database.ContaPessoa.destroy({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).send({ message: "Conta deletada" });
    } catch (err) {
      res.status(500).json(console.log(err.message));
    }
  }
}

module.exports = ContaPessoa;
