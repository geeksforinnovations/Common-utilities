'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AppSettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key:{
        allowNull:false,
        type: Sequelize.STRING
      },
      value: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      displayName:{
        allowNull:false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AppSettings');
  }
};