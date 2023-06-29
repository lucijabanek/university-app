const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

const studentsRoute = require('../routes/students');
const professorsRoute = require('../routes/professors');
const coursesRoute = require('../routes/courses');
const departmentsRoute = require('../routes/departments'); ;
const majorsRoute = require('../routes/majors');
const examsRoute = require('../routes/exams');
const enrollmentsRoute = require('../routes/enrollments');
const resultsRoute = require('../routes/results');
const loginRoute = require('../routes/login');

const { apiErrorHandler } = require('../middleware/errorHandler');
const ApiError = require('../middleware/ApiError');

const server = express();

server.use(express.json());

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use('/api/v1/students', studentsRoute);
server.use('/api/v1/professors', professorsRoute);
server.use('/api/v1/courses', coursesRoute);
server.use('/api/v1/departments', departmentsRoute);
server.use('/api/v1/majors', majorsRoute);
server.use('/api/v1/exams', examsRoute);
server.use('/api/v1/enrollments', enrollmentsRoute);
server.use('/api/v1/results', resultsRoute);
server.use('/api/v1/login', loginRoute);

server.all('*', (req, res, next) => {
  next(ApiError.notFound(`Requested URL ${req.path} not found`));
});

server.use(apiErrorHandler);

module.exports = server;
