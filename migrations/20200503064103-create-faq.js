'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FAQ', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING(500)
    },
    answer: {
        type: Sequelize.STRING(1500)
    },
    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FAQ');
  }
};