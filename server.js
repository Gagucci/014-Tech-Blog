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
    cookie: {
        // session expires after 10 minutes
        expires: 10 * 60 * 1000,
        secure: false,
        httpOnly: true,
        sameSite: "strict"
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// set handlebars as the default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// express middleware
app.use(express.json());
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// turn on routes
app.use(express.static('utils'));
app.use(express.static(path.join(__dirname, "public")));

