const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const fs = require("fs");
const path = require("path");
const express = require("express");
const { animals } = require("./data/animals.json");

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.static("public"));
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


const { findSourceMap } = require("module");






app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});