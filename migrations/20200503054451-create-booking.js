'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        type:   Sequelize.ENUM,
        values: ['Active', 'Completed','Cancelled']
      },
      languageId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Languages',
          key: 'id', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',

      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',

      },
      pujaStartDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      pujaEndDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      pujariId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Pujari',
          key: 'id', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',
      },
      pujaId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pujas',
          key: 'id', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',
      },
      pujaType: {
        type:   Sequelize.ENUM,
        values: ['Offline', 'Online']
      },
      customerName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Booking');
  }
};