// load .env data into process.env
require("dotenv").config();
const port = process.env.PORT || 5000;
const express = require("express");
//const cookieParser = require("cookie-parser");
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
//app.use(cookieParser());
//app.use(cors(corsOptions));
app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true })); // use to parse form data in req.body, extended: true to allow nested objects in req.body

const loginRoutes = require("./src/routes/login.js");
const usersRoutes = require("./src/routes/users.js");
const entriesRoutes = require("./src/routes/entries.js");
const likesRoutes = require("./src/routes/likes.js");
const sharesRoutes = require("./src/routes/shares.js");
const filterRoutes = require("./src/routes/filter.js");
const myprofileRoutes = require("./src/routes/myprofile.js");
const myEntriesRoutes = require("./src/routes/myentry.js");
//const samplehomeRoutes = require("./src/routes/samplehome.js");

app.use("/api/login", loginRoutes(db));
app.use("/api/users", usersRoutes(db));
app.use("/api/entries", entriesRoutes(db));
app.use("/api/likes", likesRoutes(db));
app.use("/api/shares", sharesRoutes(db));
app.use("/api/filter", filterRoutes(db));
app.use("/api/myprofile", myprofileRoutes(db));
app.use("/api/myentry", myEntriesRoutes(db));

app.post("api/logout", (req, res) => {
  req.session = null;
  res.redirect("/home");
});

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
