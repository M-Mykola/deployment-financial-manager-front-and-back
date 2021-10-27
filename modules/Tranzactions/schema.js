const { Schema, model } = require("mongoose");

const TranzactionSchema = new Schema({
  categories: String,
  type_of_operation: String,
  sum: String,
  date: String,
  description: String,
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Tranzactions", TranzactionSchema);
