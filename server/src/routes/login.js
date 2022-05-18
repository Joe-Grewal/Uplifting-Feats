const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let query = `SELECT * FROM users WHERE user_name = '${username}' AND password = '${password}';`;
    db.query(query)
      .then((data) => {
        console.log("query:", query);
        if (data.rows[0]) {
          const user = data.rows[0];
          console.log("user", user);
          req.session.user_id = user.id;
          res.json({ user });
        } else {
          res.status(401).json({ error: "Incorrect username or password" });
          //res.send("No user found. Try again");
          res.end();
        }
        console.log("req.session.user_id:", req.session.user_id);
      })
      .catch((err) => {
        res.status(401).json({ error: err.message });
      });
  });

  return router;
};
