const roleSeed = require('../database/seeders/20230115200000-demo-role');
const userSeed = require('../database/seeders/20230115200005-demo-user');
const departmentSeed = require('../database/seeders/20230116150108-demo-departments');
const majorSeed = require('../database/seeders/20230116150110-demo-majors');
const professorSeed = require('../database/seeders/20230116150116-demo-professors');
const courseSeed = require('../database/seeders/20230116150139-demo-courses');

module.exports = {
  majorTest: async function (queryInterface) {
    await majorSeed.up(queryInterface);
  },
  courseTest: async function (queryInterface) {
    await roleSeed.up(queryInterface);
    await userSeed.up(queryInterface);
    await departmentSeed.up(queryInterface);
    await majorSeed.up(queryInterface);
    await professorSeed.up(queryInterface);
    await courseSeed.up(queryInterface);
  }
};
