"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Languages",
      [
        {
          name: "Telugu"
        },
        {
          name: "Hindi"
        },
        {
          name: "Marati"
        },
        {
          name: "Bengali"
        },
        {
          name: "Hindi"
        },
        {
          name: "Kannada"
        },
        {
          name: "Tamil"
        },
        {
          name: "Malayalam"
        },
        {
          name: "Konkini"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Language", null, {});
  }
};
