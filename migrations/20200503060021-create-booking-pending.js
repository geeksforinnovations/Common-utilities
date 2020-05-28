'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Booking_pendings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pujariId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pujari',
          key: 'id',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      },
      bookingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Booking',
          key: 'id',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      },
      status: {
        type: Sequelize.ENUM,
        values: ['pending', 'accepted', 'denied'],
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Booking_pendings');
  }
};