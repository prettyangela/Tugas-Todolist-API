const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// index filter
userSchema.index({ email: 1 }, { name: "user_email_idx" });
userSchema.index({ status: 1 }, { name: "user_status_idx" });

exports.User = mongoose.model("User", userSchema);
