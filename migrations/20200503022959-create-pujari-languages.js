'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PujariLanguages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      languageId: {
        type: Sequelize.INTEGER,
        references: { // <--- is this redundant to associate
          model: 'Languages',
          key: 'id'
        },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
      },
      pujariId: {
        type: Sequelize.INTEGER,
        references: { // <--- is this redundant to associate
          model: 'Pujari',
          key: 'id'
        },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PujariLanguages');
  }
};