const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  ClientName: { type: String, required: true },
  BillingAddress: { type: String, required: true },
  BillingUnitNumber: { type: String, required: true },
  Category: { type: String, required: true },
  EmailId: { type: String, required: true },
  ClientBookBy: { type: String },
  ConsumerNUmber: { type: String },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
