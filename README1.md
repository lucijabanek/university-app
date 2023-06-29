# University API

## Description
This is a REST API example for University created with: 
- **Framework** - [Node.js](https://nodejs.org/en/docs/)
- **ORM** - [Sequelize](https://sequelize.org/docs/v6/)
- **Database** - [PostgreSQL](https://www.postgresql.org/docs/)
- **Virtualization** - [Docker](https://docs.docker.com/)
- **Tests** - [Jest](https://jestjs.io/docs/getting-started)
- **API UI** - [SwaggerUI](https://swagger.io/docs/)

## Table of Contents
- [University API](#university-api)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Run the project](#run-the-project)
  - [Structure](#structure)
  - [API](#api)
    - [Student](#student)
    - [Professor](#professor)
    - [Exam](#exam)
    - [Enrollment](#enrollment)
    - [Course](#course)
    - [Major](#major)
    - [Department](#department)
    - [Result](#result)
    - [Login](#login)

## Getting Started
### Prerequisites
- install npm by using this command line
  ```
  npm install npm@latest -g
  ```
- download [Docker Desktop](https://www.docker.com/products/docker-desktop/) 
### Installation

1. Clone GitHub repository:
   ```
   $ git clone git@github.com:agilathon/lucija_banek.git
   ```
2. Open repository with VS Code
3. Install npm packages:
   ```
   npm install
   ```
4. Build and run Docker:
   ```
   docker-compose up
   ```
5. Perform migration to the database:
   ```
   npm run migrate:dev
   ```
6. Seed database: 
   ```
   npm run seed:dev
   ```
### Run the project
1. Start development environment:
   ```
   npm run start:dev
   ```
2. For interaction with the API’s resources use this url:
   ```
   http://localhost:3000/api-docs/
   ```

## Structure
```
.
├── README.md
├── controllers  // functions that corresponds to the routers to handle requests
├── database // configuration of database, models, migration and seeders files
│   ├── config
│   ├── migrations
│   ├── models
│   └── seeders
├── docker-compose.yml // instructions for building a Docker image
├── index.js //file for listen the connections on the specified host and port
├── jest.config.js // configuration for jest testing
├── middleware // middleware functions for error handling and authentication
│   ├── apiError.js
│   ├── authMiddleware.js
│   ├── checkIDMiddleware.js
│   ├── errorHandler.js
│   ├── generalReqValidator.js
│   └── generateToken.js
├── package-lock.json
├── package.json
├── routes // for help determine which controllers receive certain requests
│   ├── courses.js
│   ├── departments.js
│   ├── enrollments.js
│   ├── exams.js
│   ├── login.js
│   ├── majors.js
│   ├── professors.js
│   ├── results.js
│   └── students.js
├── server // puts the specified middleware functions at the specified paths
│   └── server.js 
├── swagger-output.json
├── swagger.js 
├── test-report.html
├── tests // tests written with Jest and supertest
│   ├── course.test.js
│   ├── major.test.js
│   ├── seedData.js
│   └── testData
└── utils // helper functions for pagination and data validation 
    ├── getPagination.js
    ├── getPagingData.js
    └── validationSchemas
```
## API
### Student
> /api/v1/students
- `GET` - get list of all students
- `POST` - create new student
  
> /api/v1/students/:id
- `GET` - get one student
- `PUT` - update specific student
- `DELETE` - delete specific student

> /api/v1/students/:id/enrollments
- `GET` - get all enrolled courses by specific student

> /api/v1/students/:id/results
- `GET` - get all results by specific student

### Professor
> /api/v1/professors
- `GET` - get list of all professors
- `POST` - create new professor
  
> /api/v1/professors/:id
- `GET` - get one professor
- `PUT` - update specific professor
- `DELETE` - delete specific professor

> /api/v1/professors/:id/courses
- `GET` - get all courses taught by specific professor

### Exam
> /api/v1/exams
- `GET` - get list of all exams
- `POST` - create new exam
  
> /api/v1/exams/:id
- `GET` - get one exam
- `PUT` - update specific exam
- `DELETE` - delete specific exam

> /api/v1/exams/:id/results
- `GET` - get all results for specific exam

### Enrollment
> /api/v1/enrollment
- `GET` - get list of all enrollment
- `POST` - create new enrollment
  
> /api/v1/enrollment/:id
- `GET` - get one enrollment
- `PUT` - update specific enrollment
- `DELETE` - delete specific enrollment

### Course
> /api/v1/courses
- `GET` - get list of all courses
- `POST` - create new course
  
> /api/v1/courses/:id
- `GET` - get one course
- `PUT` - update specific course
- `DELETE` - delete specific course

> /api/v1/courses/:id/enrollments
- `GET` - get all enrolled students on specific course

> /api/v1/courses/:id/professor
- `GET` - get all professors on specific student

> /api/v1/courses/:id/exams
- `GET` - get all exams on specific student

### Major
> /api/v1/majors
- `GET` - get list of all majors
- `POST` - create new major
  
> /api/v1/majors/:id
- `GET` - get one major
- `PUT` - update specific major
- `DELETE` - delete specific major

> /api/v1/majors/:id/students
- `GET` - get all students on specific major

> /api/v1/majors/:id/courses
- `GET` - get all courses on specific major

### Department
> /api/v1/departments
- `GET` - get list of all departments
- `POST` - create new department
  
> /api/v1/departments/:id
- `GET` - get one department
- `PUT` - update specific department
- `DELETE` - delete specific department

> /api/v1/departments/:id/professors
- `GET` - get all professors on specific department

### Result
> /api/v1/results
- `GET` - get list of all results
- `POST` - create new result
  
> /api/v1/results/:id
- `GET` - get one result
- `PUT` - update specific result
- `DELETE` - delete specific result

### Login
> /api/v1/login
- `POST` - for authenticate user

<h2>Code Contributors</h2>
<h3>Author</h3>
 
 Lucija Banek
- GitHub: [@lucijabanek](https://github.com/lucijabanek)
- email: lucijabanek@gmail.com

<h3>Mentors</h3>

- Ante Birčić
- Marko Gudić
- Frane Kalebić
- Marko Radovčić
