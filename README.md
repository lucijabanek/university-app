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
    - [Generating documentation](#generating-documentation)
    - [Run tests with Jest](#run-tests-with-jest)
  - [Structure](#structure)

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
   `npm run start:dev`
   ```
### Generating documentation
1. Generate the documentation:
    ```
    npm run generate-swagger
    ```
2. For interaction with the API’s resources use this url (the server must be running for the documentation to be available): http://localhost:3000/api-docs/ 

### Run tests with Jest
1. Run tests:
    ```
    npm run test
    ```
- Test results are saved in: **test-report.html**
- Test coverage is saved in:  **/coverage**


## Structure
```
.
├── README.md
├── controllers  // functions that corresponds to the routers to handle requests
├── database // configuration of database, models, migration and seeders files
├── docker-compose.yml // instructions for building a Docker image
├── index.js //file for listen the connections on the specified host and port
├── jest.config.js // configuration for jest testing
├── middleware // middleware functions for error handling and authentication
├── package-lock.json
├── package.json
├── routes // for help determine which controllers receive certain requests
├── server // puts the specified middleware functions at the specified paths
├── swagger-output.json
├── swagger.js 
├── test-report.html
├── tests // tests written with Jest and supertest
└── utils // helper functions for pagination and data validation 
```

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
