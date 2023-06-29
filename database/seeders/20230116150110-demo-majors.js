'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('major', [{
      name: 'First major'
    },
    {
      name: 'Second major'
    },
    {
      name: 'Third major'
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('major', null, {});
  }
};
