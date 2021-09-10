'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  

     await queryInterface.bulkInsert('ContaPessoas', [
       
      {
      nome: 'John Doe',
      email: 'john1921@gmail.com',
      senha: 'lalal21',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        nome: 'Carla',
        email: 'carlinhda21@gmail.com',
        senha: 'carel1221',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Vitoria",
        email:'vito122@gmail.com',
        senha: 'sdjasd',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
