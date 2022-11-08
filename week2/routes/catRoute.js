"use strict";

const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  cat_list_get,
  cat_get,
  cat_post,
  cat_update_put,
  cat_delete,
} = require("../controllers/catController");
const router = express.Router();

router
  .route("/")
  .get(cat_list_get)
  .put(cat_update_put)
  .post(upload.single("cat"), cat_post);

router.route("/").get(cat_get).delete(cat_delete);

module.exports = router;
