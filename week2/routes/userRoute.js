"use strict";
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  user_list_get,
  user_get,
  user_post,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(user_list_get).post(upload.single("user"), user_post);

router.get("/:id", user_get);

router.put("/", (req, res) => {
  res.send("From this endpoint you can edit users.");
});

router.delete("/", (req, res) => {
  res.send("From this endpoint you can delete users.");
});

module.exports = router;
