'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('enrollment', [{
      student_id: 1,
      course_id: 1
    },
    {
      student_id: 1,
      course_id: 2
    },
    {
      student_id: 3,
      course_id: 3
    },
    {
      student_id: 2,
      course_id: 1
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('enrollment', null, {});
  }
};
