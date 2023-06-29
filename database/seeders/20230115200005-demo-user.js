'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [{
      email: 'admin@example.com',
      password: 'pass1234',
      role_id: 1
    },
    {
      email: 'student@example.com',
      password: 'pass1234',
      role_id: 2
    },
    {
      email: 'professor@example.com',
      password: 'pass1234',
      role_id: 3
    },
    {
      email: 'example@example.com',
      password: 'pass12345',
      role_id: 2
    },
    {
      email: 'example1@example.com',
      password: 'pass12345',
      role_id: 2
    },
    {
      email: 'example4@example.com',
      password: 'pass1234',
      role_id: 3
    },
    {
      email: 'example6@example.com',
      password: 'pass1234',
      role_id: 3
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
