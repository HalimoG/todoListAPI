"use strict";
require("dotenv").config();

const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const dbHelpers = require("./helpers/db")(knex);

//middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//routes
const userRoutes = require("./routes/users")(dbHelpers);

//mount routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
