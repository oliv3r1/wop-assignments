"use strict";
// userController
const { getAllUsers, getUser } = require("../models/userModel");

const user_list_get = async (req, res) => {
  res.json(await getAllUsers());
};

const user_get = async (req, res) => {
  const user = await getUser(req.params.id);
  if (user.length > 0) {
    res.send(user.pop());
  } else {
    res.send("Virhe");
  }
};

const user_post = (req, res) => {
  console.log("user_post", req.body);
  res.send("Add user route");
};

module.exports = {
  user_list_get,
  user_get,
  user_post,
};
