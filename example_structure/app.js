/////////------SET UP VARIABLES------/////////
  const exp = require("express");
const app = exp();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const methodOverride = require("method-override");

/////////------SET UP DATABASE------/////////
const pgp = require("pg-promise")();var db = pgp(process.env.DATABASE_URL || "postgres://silverRectangle@localhost:5432/****databaseName****");

app.engine("html", mustacheExpress());
app.set("view engine","html");
 app.set("views",__dirname + "/views");