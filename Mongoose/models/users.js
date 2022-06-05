const mongoose = require("mongoose");
const pollSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orderdate:String,
  orderNumber: Number,
  user: String,
  order: String,
  total: String,
  card: String,
  phoneNumber: Number,
});
module.exports = mongoose.model("Poll", pollSchema);