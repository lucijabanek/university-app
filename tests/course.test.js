const request = require('supertest');
const app = require('../server/server');
const db = require('../database/models');
const seedData = require('./seedData.js');
const { courseGETData, coursePOSTData, coursePUTData, courseDELETEData } = require('./testData/course');

describe('course route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.courseTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for course model', () => {
    describe.each(courseGETData)('GET method on course routes returns expected status code and message if exists', (route, expectedStatus, ...messagesArray) => {
      test(`${route} returns ${expectedStatus} status`, async () => {
        const response = await request(app).get(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
        if (response.body.message) {
          if (typeof response.body.message === 'object') {
            const bodyMessages = [];
            response.body.message.forEach(message => bodyMessages.push(message.msg));
            expect(bodyMessages).toEqual(messagesArray);
          } else {
            expect(response.body.message).toMatch(messagesArray);
          }
        }
      });
    });
  });
  describe('POST method for course model', () => {
    describe.each(coursePOSTData)('POST method for course route returns expected status code and message if provided', (route, course, expectedStatus, ...messagesArray) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const response = await request(app).post(`${route}`).send(course);
        expect(response.statusCode).toBe(expectedStatus);
        if (response.body.message) {
          if (typeof response.body.message === 'object') {
            const bodyMessages = [];
            response.body.message.forEach(message => bodyMessages.push(message.msg));
            expect(bodyMessages).toEqual(messagesArray);
          } else {
            expect(response.body.message).toMatch(messagesArray);
          }
        }
      });
    });
  });
  describe('PUT method for course model', () => {
    describe.each(coursePUTData)('PUT method on course routes returns expected status code and message if provided', (route, course, expectedStatus, ...messagesArray) => {
      test(`PUT request returns ${expectedStatus} status`, async () => {
        const response = await request(app).put(`${route}`).send(course);
        expect(response.statusCode).toBe(expectedStatus);
        if (response.body.message) {
          if (typeof response.body.message === 'object') {
            const bodyMessages = [];
            response.body.message.forEach(message => bodyMessages.push(message.msg));
            expect(bodyMessages).toEqual(messagesArray);
          } else {
            expect(response.body.message).toMatch(messagesArray);
          }
        }
      });
    });
  });
  describe('DELETE method for course model', () => {
    describe.each(courseDELETEData)('DELETE on course routes returns expected status code and message', (route, expectedStatus, ...messagesArray) => {
      test(`DELETE request returns ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
        if (response.body.message) {
          if (typeof response.body.message === 'object') {
            const bodyMessages = [];
            response.body.message.forEach(message => bodyMessages.push(message.msg));
            expect(bodyMessages).toEqual(messagesArray);
          } else {
            expect(response.body.message).toMatch(messagesArray);
          }
        }
      });
    });
  });
});
