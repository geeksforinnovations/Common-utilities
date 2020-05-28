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
        type: Sequelize.STRING(50)
      },
      value: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      displayName:{
        allowNull:false,
        type: Sequelize.STRING(50)
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AppSettings');
  }
};