const repository = require("./repository");
const errorHelper = require("../../../utils/error");
const fileHelper = require("../../../utils/fileHelper");

/**
 * Get List User
 * @param {Object} query values for filtering needs
 */
const index = async (query) => {
  // get data
  return await repository.list(query);
};

/**
 * Get List User
 */
const create = async (data) => {
  // get data
  const todo = await repository.save(data);
  if (!todo) errorHelper.throwNotFound("todo Not Found");

  return {
    todo,
  };
};

/**
 * Get Detail User
 * @param {String} id
 */
const detail = async (id) => {
  const todo = await repository.findById(id);
  if (!todo) errorHelper.throwNotFound("User Not Found");
  return {
    todo: todo,
  };
};

/**
 * Update One User
 * @param {String} id
 * @param {Object} body
 */
const updateOne = async (id, body) => {
  const todo = await repository.findById(id);
  if (!todo) errorHelper.throwNotFound("todo Not Found");

  // update todo
  let updatedTodo = await repository.updateOne(id, body);
  if (!updatedTodo) errorHelper.throwInternalServerError("Update Todo Failed");

  return {
    todo: updatedTodo,
  };
};

/**
 * Delete One todo
 * @param {String} id
 */
const deleteOne = async (id) => {
  const todo = await repository.findById(id);
  if (!todo) errorHelper.throwNotFound("Todo Not Found");

  // delete todo
  let deletedTodo = await repository.deleteOne(id);
  if (!deletedTodo) errorHelper.throwInternalServerError("Delete Todo Failed");

  return true;
};

const deleteAll = async () => {
  const todo = await repository.deleteAll();
  if (!todo) errorHelper.throwNotFound("Todo Not Found");

  return true;
};

module.exports = {
  index,
  detail,
  updateOne,
  create,
  deleteOne,
  deleteAll,
};
