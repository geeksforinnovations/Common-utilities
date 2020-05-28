'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 return queryInterface.bulkInsert('AppSettings', [{
      key: 'allowBookingBefore',
      value: '15',
      type: 'Number',
      displayName: "allowBookingBefore",
    },
    {
      key: 'EmailFrom',
      value: 'test@gmail.com',
      type: 'String',
      displayName: "EmailFrom",
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AppSettings', null, {});
    
  }
};
