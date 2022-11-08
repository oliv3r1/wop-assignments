"use strict";
// catController
const { getCat, getAllCats, addCat, updateCat } = require("../models/catModel");

const cat_list_get = async (req, res) => {
  const kissat = await getAllCats();
  res.json(kissat);
};

const cat_get = async (req, res) => {
  const cat = await getCat(req.params.id);
  if (cat.length > 0) {
    res.json(cat.pop());
  } else {
    res.send("virhe");
  }
};

const cat_post = async (req, res) => {
  console.log("cat_post", req.body, req.file);
  const data = [
    req.body.name,
    req.body.birthdate,
    req.body.weight,
    req.body.owner,
    req.file.filename,
  ];

  const result = await addCat(data);
  if (result.affectedRows > 0) {
    res.json({
      message: "cat added",
      cat_id: result.insertId,
    });
  } else {
    res.send("virhe");
  }
};

const cat_update_put = async (req, res) => {
  console.log("cat_update_put", req.body);
  const data = [
    req.body.name,
    req.body.birthdate,
    req.body.weight,
    req.body.owner,
    req.body.id,
  ];
  const result = await updateCat(data);
  if (result.affectedRows > 0) {
    res.json({
      message: "Cat modified",
    });
  } else {
    res.send("virhe");
  }
};

const cat_delete = async (req, res) => {
  const result = await deleteCat(req.params.id);
  if (result.affectedRows > 0) {
    res.json({
      message: "Cat Deleted",
    });
  } else {
    res.send("virhe");
  }
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
  cat_update_put,
  cat_delete,
};
