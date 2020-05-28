'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pujari_reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      review: {
        allowNull: false,
        type: Sequelize.STRING(1000)
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
      pujariId:{
        type: Sequelize.INTEGER,
        allowNull: false,
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
      visibleFlag:{
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      bookingId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Booking',
          key: 'id', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',

      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pujari_reviews');
  }
};