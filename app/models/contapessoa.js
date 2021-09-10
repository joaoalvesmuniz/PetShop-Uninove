'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContaPessoa extends Model {

    static associate(models) {
      // define association here
    }
  };
  ContaPessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ContaPessoa',
  });
  return ContaPessoa;
};