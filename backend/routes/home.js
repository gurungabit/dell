const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.status(200).json({ message: "I am working" });
});

module.exports = router;
