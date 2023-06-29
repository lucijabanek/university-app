module.exports.majorGETData = [
  ['/api/v1/majors', 200],
  ['/api/v1/majors/?', 200],
  ['/api/v1/majors?', 200],
  ['/api/v1/majors/1', 200],
  ['/api/v1/majors?page=10', 200],
  ['/api/v1/majors?size=10', 200],
  ['/api/v1/majors?page=10&size=2', 200],
  ['/api/v1/majors/1/students', 200],
  ['/api/v1/majors/1/students?page=1&size=4', 200],
  ['/api/v1/majors/1/students?page=2', 200],
  ['/api/v1/majors/1/students?size=2', 200],
  ['/api/v1/majors/1/courses', 200],
  ['/api/v1/majors/1/courses?page=1&size=4', 200],
  ['/api/v1/majors/1/courses?page=2', 200],
  ['/api/v1/majors/1/courses?size=2', 200],
  ['/api/v1/majors/aaa/students', 400, ':id must be an integer'],
  ['/api/v1/majors/aaa/courses', 400, ':id must be an integer'],
  ['/api/v1/majors/aaaa', 400, ':id must be an integer'],
  ['/api/v1/majors/+', 400, ':id must be an integer'],
  ['/api/v1/majors?page=', 400, 'Value after page= must be a positive integer', 'page= query cannot be empty'],
  ['/api/v1/majors?page=-2', 400, 'Value after page= must be a positive integer'],
  ['/api/v1/majors/1/students?page=-2', 400, 'Value after page= must be a positive integer'],
  ['/api/v1/majors/1/courses?page=-2', 400, 'Value after page= must be a positive integer'],
  ['/api/v1/majors?size=0', 400, 'Value after size= must be an integer more than or equal to 1'],
  ['/api/v1/majors?size=', 400, 'Value after size= must be an integer more than or equal to 1', 'size= query cannot be empty'],
  ['/api/v1/majors?page=&size=', 400, 'Value after page= must be a positive integer', 'page= query cannot be empty',
    'Value after size= must be an integer more than or equal to 1', 'size= query cannot be empty'],
  ['/api/v1/majors/2/students?page=&size=', 400, 'Value after page= must be a positive integer', 'page= query cannot be empty',
    'Value after size= must be an integer more than or equal to 1', 'size= query cannot be empty'],
  ['/api/v1/majors/2/courses?page=&size=', 400, 'Value after page= must be a positive integer', 'page= query cannot be empty',
    'Value after size= must be an integer more than or equal to 1', 'size= query cannot be empty'],
  ['/api/v1/majors?page=10&size=', 400, 'Value after size= must be an integer more than or equal to 1', 'size= query cannot be empty'],
  ['/api/v1/majors?page=&size=2', 400, 'Value after page= must be a positive integer', 'page= query cannot be empty'],
  ['/api/v1/major', 404, 'Requested URL /api/v1/major not found'],
  ['/api/v1/majors/aaa/aaa', 404, 'Requested URL /api/v1/majors/aaa/aaa not found'],
  ['/api/v1/majors/73', 404, 'No data found for ID 73'],
  ['/api/v1/majors/73/students', 404, 'No data found for ID 73'],
  ['/api/v1/majors/73/courses', 404, 'No data found for ID 73']
];

module.exports.majorPOSTData = [
  ['/api/v1/majors', { name: 'New major test' }, 201],
  ['/api/v1/majors', { id: 5, created_at: '2022-01-31 12:00', updated_at: '2022-01-31 12:00' }, 400, 'Cannot set property of \'id\'',
    'Cannot set property of \'created_at\'', 'Cannot set property of \'updated_at\'', 'Field \'name\' must be provided', 'Field \'name\' must be a string',
    'Field \'name\' cannot be an empty string'],
  ['/api/v1/majors', { id: 5, name: 'New major major' }, 400, 'Cannot set property of \'id\''],
  ['/api/v1/majors', { name: 'New major test' }, 500, 'Something went wrong!'],
  ['/api/v1/majors', { name: '' }, 400, 'Field \'name\' cannot be an empty string'],
  ['/api/v1/majors', { na: 'New major test' }, 400, 'Field \'name\' must be provided', 'Field \'name\' must be a string', 'Field \'name\' cannot be an empty string']
];

module.exports.majorPUTData = [
  ['/api/v1/majors/1', { name: 'New major put test' }, 202],
  ['/api/v1/majors/n', { name: 'Major put test' }, 400, ':id must be an integer'],
  ['/api/v1/majors/73', { name: 'Major put test' }, 404, 'No data found for ID 73'],
  ['/api/v1/majors/2', { id: 5, created_at: '2022-01-31 12:00', updated_at: '2022-01-31 12:00' }, 400, 'Cannot set property of \'id\'',
    'Cannot set property of \'created_at\'', 'Cannot set property of \'updated_at\'', 'Field \'name\' must be provided', 'Field \'name\' must be a string',
    'Field \'name\' cannot be an empty string'],
  ['/api/v1/majors/3', { id: 5, name: 'New major major' }, 400, 'Cannot set property of \'id\''],
  ['/api/v1/majors/1', { name: '' }, 400, 'Field \'name\' cannot be an empty string'],
  ['/api/v1/majors/3', { na: 'New major test' }, 400, 'Field \'name\' must be provided', 'Field \'name\' must be a string', 'Field \'name\' cannot be an empty string']
];

module.exports.majorDELETEData = [
  ['/api/v1/majors/2', 204, '"id": 2'],
  ['/api/v1/majors/73', 404, 'No data found for ID 73'],
  ['/api/v1/majors/n', 400, ':id must be an integer']
];
