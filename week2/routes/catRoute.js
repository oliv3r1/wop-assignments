"use strict";

const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { cat_list_get, cat_get } = require("../controllers/catController");
const router = express.Router();

router.get("/", cat_list_get);

router.get("/:id", cat_get);

router.put("/", (req, res) => {
  res.send("From this endpoint you can edit cats.");
});

router.post("/", upload.single("cat"), (req, res) => {
  res.send("From this endpoint you can add cats.");
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

router.post("/", (req, res) => {
  res.send("From this endpoint you can add cats.");
});

module.exports = router;
