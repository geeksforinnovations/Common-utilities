'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pujari', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,    
        type: Sequelize.STRING(50)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      middleName: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.STRING(2000)
      },
      contactNo: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      address1: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      address2: {
        type: Sequelize.STRING(100)
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      state:{
        type: Sequelize.STRING(50)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      timeZone: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      status: {
        type: Sequelize.ENUM,
        values: ['accepted', 'requested', 'denied','inActive'],
      },
      imageId: {
        type: Sequelize.STRING
      },
      rating: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      experience: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pujari');
  }
};