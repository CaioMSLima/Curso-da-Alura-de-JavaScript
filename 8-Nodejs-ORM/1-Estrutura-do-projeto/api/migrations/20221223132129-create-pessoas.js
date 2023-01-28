//Os numeros no nome são a data de criação
//ferramenta terá todo o trabalho, não só de se comunicar com o banco, 
//através do arquivo config e do modo como esse arquivo config se 
//comunicará com o resto do código e ela transforma tudo isso aqui 
//que estamos escrevendo em JavaScript em queries, em consultas ao SQL


'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  //a up, de subir, que é o que acontece quando criamos a migração
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pessoas', {
      
    //cria uma coluna id atomaticamente para a tabela
    //com suas restições

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

 // a down, que está aqui embaixo, que é o que acontece quando desfaz a migraçã
 // desfazer, destruir
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pessoas');
  }
};
