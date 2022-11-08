"use strict";

const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  cat_list_get,
  cat_get,
  cat_post,
  cat_update_put,
} = require("../controllers/catController");
const router = express.Router();

router.get("/", cat_list_get);

router.get("/:id", cat_get);

router.put("/", cat_update_put);

router.post("/", upload.single("cat"), cat_post);

router.post("/", (req, res) => {
  res.send("From this endpoint you can add cats.");
});

module.exports = router;
