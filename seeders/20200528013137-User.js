'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      fullName: 'prasad K',
      contactNumber: '560789453',
      address: '123 lock ave',
      cognitoId: '145g-uuid1',
    },
    {
      fullName: 'prasad',
      contactNumber: 'sastry',
      address: 'lokesh',
      cognitoId: '145b-uuid1',
    },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
