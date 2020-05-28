'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PujaLanguages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pujaid:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Pujas',
          key: 'id', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',
      },
      languageId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Languages',
          key: 'id', 
       },
       onUpdate: 'NO ACTION',
       onDelete: 'NO ACTION',

      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PujaLanguages');
  }
};