"use strict";

const express = require("express");
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use("/cat", catRoute);
app.use("/user", userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
