// load .env data into process.env
require("dotenv").config();

const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//cookie session
const cookies = require("cookie-session");
app.use(
  cookies({
    name: "session",
    keys: ["user_id"],
  })
);

const { Pool } = require("pg");
const dbParams = require("./src/lib/db.js");
const db = new Pool(dbParams);
db.connect();

//middleware
// Load the logger first so all (static) HTTP requests are logged to STDOUT
app.use(morgan("dev"));

app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true })); // use to parse form data in req.body, extended: true to allow nested objects in req.body

const loginRoutes = require("./src/routes/login.js");
const samplehomeRoutes = require("./src/routes/samplehome.js");

app.use("/login", loginRoutes(db));
app.use("/home", samplehomeRoutes(db));

app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/home");
});

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
