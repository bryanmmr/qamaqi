const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  order: {
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: String,
    required: false
  }
});

const Order = mongoose.model("Order", OrdersSchema);

module.exports = Order;