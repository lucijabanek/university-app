const ApiError = require('../middleware/ApiError');
const { controllerErrorHandler } = require('../middleware/errorHandler');
const { getPagination } = require('../utils/getPagination');
const { getPagingData } = require('../utils/getPagingData');

exports.getAll = (Model) => {
  return controllerErrorHandler(async (req, res) => {
    const { include, page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    const options = {
      order: [['id', 'ASC']]
    };
    if (include) {
      options.include = include;
    };
    let all = await Model.findAndCountAll({ include, limit, offset });
    all = getPagingData(all, page, limit);
    return res.status(200).json({ data: all });
  });
};

exports.getOne = (Model) => {
  return controllerErrorHandler(async (req, res) => {
    const { id } = req.params;
    const { include } = req.query;
    const options = {};
    if (include) {
      options.include = include;
    }
    const oneData = await Model.findByPk(id, options);

    return res.status(200).json({ data: oneData });
  });
};

exports.createOne = (Model) => {
  return controllerErrorHandler(async (req, res) => {
    const oneData = await Model.create(req.body);

    return res.status(201).json({ data: oneData });
  });
};

exports.updateOne = (Model) => {
  return controllerErrorHandler(async (req, res) => {
    const [updated, updatedData] = await Model.update(req.body, {
      where: { id: req.params.id },
      returning: true
    });
    if (!updated) {
      throw ApiError.notFound(`No data found for ID ${req.params.id}`);
    }
    return res.status(202).json({ data: updatedData });
  });
};

exports.deleteOne = (Model) => {
  return controllerErrorHandler(async (req, res) => {
    await Model.destroy({ where: { id: req.params.id } });

    return res.status(204).json({ id: req.params.id });
  });
};
