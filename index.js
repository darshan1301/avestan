const express = require("express");
const bodyParser = require("body-parser");
const { connectMongoDB } = require("./db");
const customerRoute = require("./routes/customerRoute");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

connectMongoDB();

// app.get("/", (req, res) => {
//   res.send("Hello, this is your Express server!");
// });

app.use("/customer", customerRoute);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
