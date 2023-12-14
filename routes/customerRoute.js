const express = require("express");
const { customerPost } = require("../controllers/customerController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

router.post("/", customerPost);

module.exports = router;
