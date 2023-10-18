const express = require("express");
const session = require("express-session");
const path = require("path");
const helpers = require("./utils/helpers");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

// import sequelize connection
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// initialize handlebars engine
const hbs = exphbs.create({ helpers });
// initialize session
const sess = {
    secret: process.env.SECRET,
};
