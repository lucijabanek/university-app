'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('result', [{
      exam_id: 1,
      student_id: 1,
      grade: 1
    },
    {
      exam_id: 1,
      student_id: 2,
      grade: 4
    },
    {
      exam_id: 3,
      student_id: 1
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('result', null, {});
  }
};
