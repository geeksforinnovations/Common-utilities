'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Languages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Languages');
  }
};