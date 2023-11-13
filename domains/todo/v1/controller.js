const errorHelper = require("../../../utils/error");
const logger = require("../../../utils/logger");
const respond = require("../../../utils/respond");
const service = require("./service");

/**
 * Get List Todo
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const index = async (req, res) => {
  try {
    const result = await service.index(req.query);
    return respond.responseSuccess(
      res,
      "Todo List retrieved successfully",
      result.data,
      result.meta
    );
  } catch (e) {
    logger.info(e);
    return respond.responseError(res, e.statusCode, e.message);
  }
};

/**
 * Get Detail Todo
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const detail = async (req, res) => {
  try {
    const result = await service.detail(req.params.id);
    return respond.responseSuccess(
      res,
      "Todo retrieved successfully",
      result,
      undefined
    );
  } catch (e) {
    if (e.name === errorHelper.NOT_FOUND) {
      return respond.responseNotFound(res, e.message);
    }
    logger.info(e);
    return respond.responseError(res, e.statusCode, e.message);
  }
};

/**
 * Update One Todo
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const updateOne = async (req, res) => {
  try {
    const result = await service.updateOne(req.params.id, req.body);
    return respond.responseSuccess(
      res,
      "Todo updated successfully",
      result,
      undefined
    );
  } catch (e) {
    if (e.name === errorHelper.NOT_FOUND) {
      return respond.responseNotFound(res, e.message);
    }
    if (e.name === errorHelper.BAD_REQUEST) {
      return respond.responseBadRequest(res, e.message);
    }
    if (e.name === errorHelper.UNPROCESSABLE_ENTITY) {
      return respond.responseUnprocessableEntity(res, e.message);
    }
    logger.info(e);
    return respond.responseError(res, e.statusCode, e.message);
  }
};

const createTodo = async (req, res) => {
  try {
    const result = await service.create(req.body);
    return respond.responseSuccess(
      res,
      "Todo create successfully",
      result,
      undefined
    );
  } catch (e) {
    if (e.name === errorHelper.NOT_FOUND) {
      return respond.responseNotFound(res, e.message);
    }
    if (e.name === errorHelper.BAD_REQUEST) {
      return respond.responseBadRequest(res, e.message);
    }
    if (e.name === errorHelper.UNPROCESSABLE_ENTITY) {
      return respond.responseUnprocessableEntity(res, e.message);
    }
    logger.info(e);
    return respond.responseError(res, e.statusCode, e.message);
  }
};

/**
 * Delete One Todo
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const deleteOne = async (req, res) => {
  try {
    await service.deleteOne(req.params.id);
    return respond.responseSuccess(
      res,
      "Todo Deleted successfully",
      undefined,
      undefined
    );
  } catch (e) {
    if (e.name === errorHelper.NOT_FOUND) {
      return respond.responseNotFound(res, e.message);
    }
    if (e.name === errorHelper.BAD_REQUEST) {
      return respond.responseBadRequest(res, e.message);
    }
    if (e.name === errorHelper.UNPROCESSABLE_ENTITY) {
      return respond.responseUnprocessableEntity(res, e.message);
    }
    logger.info(e);
    return respond.responseError(res, e.statusCode, e.message);
  }
};

const deleteAll = async (req, res) => {
  try {
    await service.deleteAll();
    return respond.responseSuccess(
      res,
      "Todo Deleted all successfully",
      undefined,
      undefined
    );
  } catch (e) {
    if (e.name === errorHelper.NOT_FOUND) {
      return respond.responseNotFound(res, e.message);
    }
    if (e.name === errorHelper.BAD_REQUEST) {
      return respond.responseBadRequest(res, e.message);
    }
    if (e.name === errorHelper.UNPROCESSABLE_ENTITY) {
      return respond.responseUnprocessableEntity(res, e.message);
    }
    logger.info(e);
    return respond.responseError(res, e.statusCode, e.message);
  }
};

module.exports = {
  index,
  detail,
  updateOne,
  createTodo,
  deleteOne,
  deleteAll,
};
