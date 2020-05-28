'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      contactNumber: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      cognitoId: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};