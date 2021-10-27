const { Schema, model, Types } = require("mongoose");
// const moment = require("moment");

const CategoriesSchema = new Schema({
  categories: String,
  description: String,
  // date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Category", CategoriesSchema);
