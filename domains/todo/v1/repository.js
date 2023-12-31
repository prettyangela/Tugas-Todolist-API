const { Todo } = require("../todo");
const mongoQuery = require("../../../utils/mongoQuery");

/**
 * Get List Data
 * @param {Object} params
 */
const list = async (params) => {
  // init aggregate pipelines
  let pipelines = [];

  // init filters
  let filters = [];

  // filter : search
  if (params.search && params.search !== "") {
    filters.push({
      $or: [
        { first_name: mongoQuery.searchLike(params.search) },
        { last_name: mongoQuery.searchLike(params.search) },
      ],
    });
  }

  // assign filters to pipelines
  if (filters.length > 0) {
    pipelines.push({ $match: { $and: filters } });
  }

  // sort
  pipelines.push({
    $sort: mongoQuery.getSort(
      params.sort_by,
      "created.at",
      params.sort_dir,
      "desc"
    ),
  });

  // get total todo
  let total = await Todo.countDocuments();

  // get total filtered
  let totalFiltered = 0;
  let totalFilteredPipeline = [];
  totalFilteredPipeline.push(...pipelines);
  totalFilteredPipeline.push({ $count: "total" });
  let resTotalFiltered = await Todo.aggregate(totalFilteredPipeline);
  if (resTotalFiltered && resTotalFiltered.length > 0) {
    totalFiltered = resTotalFiltered[0].total;
  }

  // pagination
  if (params.page && params.limit) {
    let pageVal = parseInt(params.page);
    let limitVal = parseInt(params.limit);
    let skip = (pageVal - 1) * limitVal;
    pipelines.push({ $limit: skip + limitVal }, { $skip: skip });
  }

  // get data
  const data = await Todo.aggregate(pipelines);

  // return
  return {
    data: data,
    meta: {
      page: params.page,
      limit: params.limit,
      total: total,
      total_filtered: totalFiltered,
    },
  };
};

/**
 * Find By ID
 * @param {String} id
 */
const findById = async (id) => {
  return Todo.findOne({ _id: id });
};

/**
 * Create New Data
 * @param {Object} data
 */
const save = async (data) => {
  let user = new Todo(data);
  return user.save();
};

/**
 * Update One Data with filter ID
 * @param {String} id
 * @param {Object} data
 */
const updateOne = async (id, data) => {
  return Todo.findOneAndUpdate({ _id: id }, data, {
    returnOriginal: false,
  });
};

/**
 * Delete One Data with filter ID
 * @param {String} id
 */
const deleteOne = async (id) => {
  return Todo.deleteOne({ _id: id });
};

const deleteAll = async () => {
  return Todo.deleteMany();
};

module.exports = {
  list,
  findById,
  save,
  updateOne,
  deleteOne,
  deleteAll,
};
