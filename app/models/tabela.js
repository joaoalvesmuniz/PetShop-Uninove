'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tabela extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tabela.init({
    nomeDono: DataTypes.STRING,
    nomeAnimal: DataTypes.STRING,
    raca: DataTypes.STRING,
    telefone: DataTypes.STRING,
    dataHora: DataTypes.STRING,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tabela',
  });
  return Tabela;
};