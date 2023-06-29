'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exam', [{
      name: 'First exam',
      course_id: 1
    },
    {
      name: 'Second exam',
      date_time: '2022-01-18 11:00',
      course_id: 1
    },
    {
      name: 'Third exam',
      date_time: '2022-01-31 12:00',
      course_id: 3
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exam', null, {});
  }
};
