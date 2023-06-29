'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('role', [{
      name: 'Admin'
    },
    {
      name: 'Student'
    },
    {
      name: 'Professor'
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('role', null, {});
  }
};
