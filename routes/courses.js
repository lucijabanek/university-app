const controller = require('../controllers/courses');
const generalController = require('../controllers/generalControllers');
const router = require('express').Router();
const Course = require('../database/models').course;
const { courseSchema } = require('../utils/validationSchemas/courseSchema');
const { paramValidations, queryValidations, generalValidations } = require('../utils/validationSchemas/generalSchemas');
const { generalReqValidator } = require('../middleware/generalReqValidator');
const { checkIDMiddleware } = require('../middleware/checkIDMiddleware');

router
  .route('/')
  .get(
  /* #swagger.tags=['Courses']
  #swagger.summary='Get all courses'
  #swagger.parameters['include'] = {
      "in": 'query',
      "description": 'Include associated table. (major and/or professor)',
      "require": false,
      "schema": {
        "type": "array"
      }
  }
    #swagger.parameters['page'] = {
      "in": 'query',
      "description": 'Parameter for scrolling through the pages, must be a positive integer',
      "require": false,
      "schema": {
        "type": "integer"
      }
  }
      #swagger.parameters['size'] = {
      "in": 'query',
      "description": 'Parameter to limit data on one page, must be a positive integer equal or greater than 1',
      "require": false,
      "schema": {
        "type": "integer"
      }
  }
    #swagger.responses[200]={
      "description": "Courses were successfully displayed",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/AllCoursesResponse'
          }
        }
      }
    }
    #swagger.responses[400]={
      "description": "Error: Bad Request",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/ValidationError'
          }
        }
      }
    }
    #swagger.responses[500]={
      "description": "Error: Internal Server Error",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/ServerError'
          }
        }
      }
    }
   #endregion swagger doc */
    queryValidations, generalReqValidator, generalController.getAll(Course))
  .post(
  /* #swagger.tags=['Courses']
  #swagger.summary='Create new course'
  #swagger.requestBody={
      "required": true,
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/CourseRequest'
          }
        }
      }
    }
    #swagger.responses[201]={
      "description": "Course created successfully",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/CourseResponse'
          }
        }
      }
    }
    #swagger.responses[400]={
      "description": "Error: Bad Request",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/ValidationError'
          }
        }
      }
    }
    #swagger.responses[500]={
      "description": "Error: Internal Server Error",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/ServerError'
          }
        }
      }
    }
   #endregion swagger doc */
    generalValidations, courseSchema, generalReqValidator, generalController.createOne(Course));
router
  .route('/:id')
  .get(
  /* #swagger.tags=['Courses']
  #swagger.summary='Get one course'
  #swagger.parameters['id'] = {
      "in": 'path',
      "description": 'Include course ID to get specific information',
      "require": true,
      "schema": {
        "type": "integer"
      }
  }
  #swagger.parameters['include'] = {
      "in": 'query',
      "description": 'Include associated table. (major and/or professor)',
      "require": false,
      "schema": {
        "type": "array"
      }
  }
    #swagger.responses[200]={
      "description": "Course was successfully displayed",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/CourseResponse'
          }
        }
      }
    }
    #swagger.responses[400]={
      "description": "Error: Bad Request",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/ValidationError'
          }
        }
      }
    }
    #swagger.responses[404]={
      "description": "Error: Not Found",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/NotFoundError'
          }
        }
      }
    }
    #swagger.responses[500]={
      "description": "Server error ocurred",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/ServerError'
          }
        }
      }
    }
   #endregion swagger doc */
    paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Course), generalController.getOne(Course))
  .put(
  /* #swagger.tags=['Courses']
  #swagger.summary='Update course'
  #swagger.parameters['id'] = {
      "in": 'path',
      "description": 'Include course ID to update specific information',
      "require": true,
      "schema": {
        "type": "integer"
      }
  }
  #swagger.requestBody={
      "required": true,
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/CourseRequest'

          }
        }
      }
    }
    #swagger.responses[202]={
      "description": "Course updated successfully",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/CourseResponse'
          }
        }
      }
    }
    #swagger.responses[400]={
      "description": "Error: Bad Request",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/ValidationError'
          }
        }
      }
    }
    #swagger.responses[404]={
      "description": "Error: Not Found",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/NotFoundError'
          }
        }
      }
    }
    #swagger.responses[500]={
      "description": "Error: Internal Server Error",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/ServerError'
          }
        }
      }
    }
   #endregion swagger doc */
    paramValidations, generalValidations, courseSchema, generalReqValidator, checkIDMiddleware(Course), generalController.updateOne(Course))
  .delete(
  /* #swagger.tags=['Courses']
  #swagger.summary='Delete course'
  #swagger.parameters['id'] = {
      "in": 'path',
      "description": 'Include course ID to delete specific information',
      "require": true,
      "schema": {
        "type": "integer"
      }
  }
  #swagger.responses[204]={
      "description": "Course deleted successfully",
    }
    #swagger.responses[400]={
      "description": "Error: Bad Request",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/DeleteSuccess'
          }
        }
      }
    }
    #swagger.responses[404]={
      "description": "Error: Not Found",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/NotFoundError'
          }
        }
      }
    }
    #swagger.responses[500]={
      "description": "Error: Internal Server Error",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/ServerError'
          }
        }
      }
    }
   #endregion swagger doc */
    paramValidations, generalReqValidator, checkIDMiddleware(Course), generalController.deleteOne(Course));
router.get(
/* #swagger.tags=['Courses']
#swagger.summary='Get all student on specific course'
  #swagger.parameters['id'] = {
      "in": 'path',
      "description": 'Include course ID to get all students for specific course',
      "require": true,
      "schema": {
        "type": "integer"
      }
  }
  #swagger.parameters['page'] = {
    "in": 'query',
    "description": 'Parameter for scrolling through the pages, must be a positive integer',
    "require": false,
    "schema": {
      "type": "integer"
    }
}
    #swagger.parameters['size'] = {
    "in": 'query',
    "description": 'Parameter to limit data on one page, must be a positive integer equal or greater than 1',
    "require": false,
    "schema": {
      "type": "integer"
    }
}
  #swagger.responses[200]={
    "description": "Students were successfully displayed",
    "content": {
      "application/json": {
        "schema": {
          $ref: '#/components/schemas/CourseStudents'
        }
      }
    }
  }
  #swagger.responses[400]={
    "description": "Error: Bad Request",
    "content": {
      "application/json": {
        "schema": {
          $ref: '#/components/schemas/ValidationError'
        }
      }
    }
  }
  #swagger.responses[404]={
      "description": "Error: Not Found",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/NotFoundError'
          }
        }
      }
    }
  #swagger.responses[500]={
    "description": "Error: Internal Server Error",
    "content": {
      "application/json": {
        "schema": {
          $ref: '#/components/schemas/ServerError'
        }
      }
    }
  }
 #endregion swagger doc */
  '/:id/enrollments', paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Course), controller.getCourseEnrollments);
router.get(
/* #swagger.tags=['Courses']
#swagger.summary='Get all professors on a specific course'
  #swagger.parameters['id'] = {
      "in": 'path',
      "description": 'Include course ID to get all professors for specific course',
      "require": true,
      "schema": {
        "type": "integer"
      }
  }
  #swagger.parameters['page'] = {
    "in": 'query',
    "description": 'Parameter for scrolling through the pages, must be a positive integer',
    "require": false,
    "schema": {
      "type": "integer"
    }
}
    #swagger.parameters['size'] = {
    "in": 'query',
    "description": 'Parameter to limit data on one page, must be a positive integer equal or greater than 1',
    "require": false,
    "schema": {
      "type": "integer"
    }
}
  #swagger.responses[200]={
    "description": "Professors were successfully displayed",
    "content": {
      "application/json": {
        "schema": {
           $ref: '#/components/schemas/CourseProfessors'
        }
      }
    }
  }
  #swagger.responses[400]={
    "description": "Error: Bad Request",
    "content": {
      "application/json": {
        "schema": {
          $ref: '#/components/schemas/ValidationError'
        }
      }
    }
  }
  #swagger.responses[404]={
      "description": "Error: Not Found",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/NotFoundError'
          }
        }
      }
    }
  #swagger.responses[500]={
    "description": "Error: Internal Server Error",
    "content": {
      "application/json": {
        "schema": {
          $ref: '#/components/schemas/ServerError'
        }
      }
    }
  }
 #endregion swagger doc */
  '/:id/professors', paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Course), controller.getCourseProfessors);
router.get(
/* #swagger.tags=['Courses']
#swagger.summary='Get all exams on a specific course'
  #swagger.parameters['id'] = {
      "in": 'path',
      "description": 'Include course ID to get all exams for specific course',
      "require": true,
      "schema": {
        "type": "integer"
      }
  }
  #swagger.parameters['page'] = {
    "in": 'query',
    "description": 'Parameter for scrolling through the pages, must be a positive integer',
    "require": false,
    "schema": {
      "type": "integer"
    }
}
    #swagger.parameters['size'] = {
    "in": 'query',
    "description": 'Parameter to limit data on one page, must be a positive integer equal or greater than 1',
    "require": false,
    "schema": {
      "type": "integer"
    }
}
  #swagger.responses[200]={
    "description": "Exams were successfully displayed",
    "content": {
      "application/json": {
        "schema": {
          $ref: '#/components/schemas/CourseExams'
      }
    }
  }
}
  #swagger.responses[400]={
    "description": "Error: Bad Request",
    "content": {
      "application/json": {
        "schema": {
          $ref: '#/components/schemas/ValidationError'
        }
      }
    }
  }
  #swagger.responses[404]={
      "description": "Error: Not Found",
      "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/NotFoundError'
          }
        }
      }
    }
  #swagger.responses[500]={
    "description": "Error: Internal Server Error",
    "content": {
      "application/json": {
        "schema": {
          $ref: '#/components/schemas/ServerError'
        }
      }
    }
  }
 #endregion swagger doc */
  '/:id/exams', paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Course), controller.getCourseExams);

module.exports = router;
