import express from "express";

//javascript theo ES6
let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
};
module.exports = configViewEngine;
