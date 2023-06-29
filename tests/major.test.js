const request = require('supertest');
const app = require('../server/server');
const db = require('../database/models');
const seedData = require('./seedData.js');
const { majorGETData, majorPOSTData, majorPUTData, majorDELETEData } = require('./testData/major');

describe('Majors route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.majorTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for major model', () => {
    describe.each(majorGETData)('GET method on major routes returns expected status code and message if exists', (route, expectedStatus, ...messagesArray) => {
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
  describe('POST method for major model', () => {
    describe.each(majorPOSTData)('POST method for major route returns expected status code and message if provided', (route, major, expectedStatus, ...messagesArray) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const response = await request(app).post(`${route}`).send(major);
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
  describe('PUT method for major model', () => {
    describe.each(majorPUTData)('PUT method on major routes returns expected status code and message if provided', (route, major, expectedStatus, ...messagesArray) => {
      test(`PUT request returns ${expectedStatus} status`, async () => {
        const response = await request(app).put(`${route}`).send(major);
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
  describe('DELETE method for major model', () => {
    describe.each(majorDELETEData)('DELETE on major routes returns expected status code and message', (route, expectedStatus, ...messagesArray) => {
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
