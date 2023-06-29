'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('student', [{
      name: 'Jim Doe',
      email: 'example@example.com',
      address: '21st Street',
      phone: '001234',
      major_id: 1,
      user_id: 4
    },
    {
      name: 'Jimmy Doe',
      email: 'example1@example.com',
      address: '22st Street',
      phone: '001234567',
      major_id: 2,
      user_id: 5
    },
    {
      name: 'Jane Doe',
      email: 'student@example.com',
      address: '21st Street',
      major_id: 3,
      user_id: 2
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('student', null, {});
  }
};
