'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
   const defaultProps = {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
     return queryInterface.addColumn(
      'contapessoas',
      'admin',
      defaultProps
    );
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'contapessoas',
      'admin',
    );
  }
};
