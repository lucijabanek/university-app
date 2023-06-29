// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'University API',
    description: 'Description'
  },
  host: 'localhost:3000',
  schemes: ['http'],
  components: {
    '@schemas': {
      ValidationErrorDetail: {
        type: 'object',
        properties: {
          value: {
            type: 'string'
          },
          msg: {
            type: 'string'
          },
          param: {
            type: 'string'
          },
          location: {
            type: 'string'
          }
        }
      },
      ValidationError: {
        type: 'object',
        properties: {
          message: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/ValidationErrorDetail'
            }
          }
        }
      },
      ServerError: {
        type: 'string',
        example: 'Something went wrong!'
      },
      NotFoundError: {
        type: 'string',
        example: 'No data found for ID '
      },
      DeleteSuccess: {
        type: 'object',
        properties: {
          id: {
            type: 'integer'
          }
        }
      },
      AllCoursesResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'object',
            properties: {
              totalItems: {
                type: 'integer',
                format: 'int64'
              },
              modelRows: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    name: {
                      type: 'string'
                    },
                    credit_hours: {
                      type: 'integer',
                      format: 'int64'
                    },
                    professor_id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    major_id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    created_at: {
                      type: 'string',
                      format: 'date-time'
                    },
                    updated_at: {
                      type: 'string',
                      format: 'date-time'
                    }
                  }
                }
              },
              totalPages: {
                type: 'integer',
                format: 'int64'
              },
              currentPage: {
                type: 'integer',
                format: 'int64'
              }
            }
          }
        }
      },
      CourseRequest: {
        type: 'object',
        required: ['name', 'credit_hours', 'professor_id', 'major_id'],
        properties: {
          name: {
            type: 'string'
          },
          credit_hours: {
            type: 'integer'
          },
          professor_id: {
            type: 'integer',
            format: 'int64'
          },
          major_id: {
            type: 'integer',
            format: 'int64'
          }
        }
      },
      CourseResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                format: 'int64'
              },
              name: {
                type: 'string'
              },
              credit_hours: {
                type: 'integer',
                format: 'int64'
              },
              professor_id: {
                type: 'integer',
                format: 'int64'
              },
              major_id: {
                type: 'integer',
                format: 'int64'
              },
              created_at: {
                type: 'string',
                format: 'date-time'
              },
              updated_at: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      },
      CourseStudents: {
        type: 'object',
        properties: {
          data: {
            type: 'object',
            properties: {
              totalItems: {
                type: 'integer',
                format: 'int64'
              },
              modelRows: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    student_id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    course_id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    created_at: {
                      type: 'string',
                      format: 'date-time'
                    },
                    updated_at: {
                      type: 'string',
                      format: 'date-time'
                    },
                    student: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'integer',
                          format: 'int64'
                        },
                        name: {
                          type: 'string'
                        },
                        email: {
                          type: 'string'
                        },
                        address: {
                          type: 'string'
                        },
                        phone: {
                          type: 'string'
                        },
                        major_id: {
                          type: 'integer',
                          format: 'int64'
                        },
                        user_id: {
                          type: 'integer',
                          format: 'int64'
                        },
                        created_at: {
                          type: 'string',
                          format: 'date-time'
                        },
                        updated_at: {
                          type: 'string',
                          format: 'date-time'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          totalPages: {
            type: 'integer',
            format: 'int64'
          },
          currentPage: {
            type: 'integer',
            format: 'int64'
          }
        }
      },
      CourseProfessors: {
        type: 'object',
        properties: {
          data: {
            type: 'object',
            properties: {
              totalItems: {
                type: 'integer',
                format: 'int64'
              },
              modelRows: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    name: {
                      type: 'string'
                    },
                    credit_hours: {
                      type: 'integer',
                      format: 'int64'
                    },
                    professor_id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    major_id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    created_at: {
                      type: 'string',
                      format: 'date-time'
                    },
                    updated_at: {
                      type: 'string',
                      format: 'date-time'
                    },
                    professor: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'integer',
                          format: 'int64'
                        },
                        name: {
                          type: 'string'
                        },
                        email: {
                          type: 'string'
                        },
                        address: {
                          type: 'string'
                        },
                        phone: {
                          type: 'string'
                        },
                        department_id: {
                          type: 'integer',
                          format: 'int64'
                        },
                        user_id: {
                          type: 'integer',
                          format: 'int64'
                        },
                        created_at: {
                          type: 'string',
                          format: 'date-time'
                        },
                        updated_at: {
                          type: 'string',
                          format: 'date-time'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          totalPages: {
            type: 'integer',
            format: 'int64'
          },
          currentPage: {
            type: 'integer',
            format: 'int64'
          }
        }
      },
      CourseExams: {
        type: 'object',
        properties: {
          data: {
            type: 'object',
            properties: {
              totalItems: {
                type: 'integer',
                format: 'int64'
              },
              modelRows: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    name: {
                      type: 'string'
                    },
                    credit_hours: {
                      type: 'integer',
                      format: 'int64'
                    },
                    professor_id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    major_id: {
                      type: 'integer',
                      format: 'int64'
                    },
                    created_at: {
                      type: 'string',
                      format: 'date-time'
                    },
                    updated_at: {
                      type: 'string',
                      format: 'date-time'
                    },
                    exams: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'integer',
                            format: 'int64'
                          },
                          name: {
                            type: 'string'
                          },
                          date_time: {
                            type: 'string',
                            format: 'date-time'
                          },
                          course_id: {
                            type: 'integer',
                            format: 'int64'
                          },
                          created_at: {
                            type: 'string',
                            format: 'date-time'
                          },
                          updated_at: {
                            type: 'string',
                            format: 'date-time'
                          }
                        }
                      }
                    }
                  }
                }
              },
              totalPages: {
                type: 'integer',
                format: 'int64'
              },
              currentPage: {
                type: 'integer',
                format: 'int64'
              }
            }
          }
        }
      }
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server/server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
