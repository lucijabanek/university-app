module.exports.getPagination = (page, size) => {
  const DEFAULT_LIMIT = 5;
  const limit = size ? Number(size) : DEFAULT_LIMIT;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};
