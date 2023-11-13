const { boolean } = require("joi");
const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

exports.Todo = mongoose.model("Todo", todoSchema);
