'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transaction', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stripeId: {
        type: Sequelize.STRING(45)
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
      status:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transaction');
  }
};