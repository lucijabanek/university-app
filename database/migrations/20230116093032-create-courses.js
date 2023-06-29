'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('course', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      credit_hours: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      professor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'professor',
          field: 'id'
        }
      },
      major_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'major',
          field: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('course', { cascade: true });
  }
};
