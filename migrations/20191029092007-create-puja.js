"use strict";
var constants = require('../utils/constants');
module.exports = {
  up: (queryInterface, Sequelize) => {
    var PujaStatus = constants.PujaStatus
    return queryInterface.createTable("Pujas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      about: {
        type: Sequelize.TEXT,
      },
      timeInHrs: {
        type: Sequelize.FLOAT,
      },
      requiredThings: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.ENUM,
        values: ["Offline", "Online", "Both"],
      },
      imageId: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.FLOAT,
      },
      status: {
        type: Sequelize.ENUM,
        values: [PujaStatus.ACTIVE, PujaStatus.INACTIVE],
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pujas");
  },
};
