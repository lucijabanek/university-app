module.exports.getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: modelRows } = data;
  const currentPage = page ? Number(page) : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, modelRows, totalPages, currentPage };
};
