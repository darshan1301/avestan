const Customer = require("../models/customerModel");

const customerPost = async (req, res) => {
  // console.log(req.body);
  const {
    clientName,
    billingAddress,
    billingUnitNumber,
    category,
    emailId,
    cliengtBookBy,
    consumerNumber,
  } = req.body;

  try {
    const newCustomer = new Customer({
      ClientName: clientName,
      BillingAddress: billingAddress,
      BillingUnitNumber: billingUnitNumber,
      Category: category,
      EmailId: emailId,
      ClientBookBy: cliengtBookBy,
      ConsumerNUmber: consumerNumber,
    });

    console.log("entry's been saved");
    const result = await newCustomer.save();
    console.log(result);
    res.status(200).send("customer info has been saved.");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { customerPost };
