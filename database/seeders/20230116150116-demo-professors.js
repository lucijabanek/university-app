'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('professor', [{
      name: 'Jae Doe',
      email: 'example4@example.com',
      phone: '123456766',
      department_id: 1,
      user_id: 6
    },
    {
      name: 'Ginny Doe',
      email: 'professor@example.com',
      address: '123rd Street',
      department_id: 3,
      user_id: 3
    },
    {
      name: 'Heidi Dortmund',
      email: 'example6@example.com',
      address: '123rd Street Home',
      phone: '123455433',
      department_id: 2,
      user_id: 7
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('professor', null, {});
  }
};
