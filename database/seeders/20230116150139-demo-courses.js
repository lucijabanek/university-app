'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('course', [{
      name: 'First course',
      credit_hours: 1,
      professor_id: 2,
      major_id: 1
    },
    {
      name: 'Second course',
      credit_hours: 2,
      professor_id: 1,
      major_id: 2
    },
    {
      name: 'Third course',
      credit_hours: 4,
      professor_id: 3,
      major_id: 2
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('course', null, {});
  }
};
