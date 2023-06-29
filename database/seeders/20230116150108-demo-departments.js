'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('department', [{
      name: 'First department'
    },
    {
      name: 'Second department'
    },
    {
      name: 'Third department'
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('department', null, {});
  }
};
