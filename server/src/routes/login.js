const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let query = `SELECT * FROM users WHERE user_name = '${username}' AND password = '${password}';`;
    db.query(query)
      .then((data) => {
        const user = data.rows[0];
        console.log("query:", query);
        console.log("user", user);
        if (user) {
          req.session.user_id = user.id;
          res.json({ user });
        } else {
          res.status(401).json({ error: "Incorrect username or password" });
        }
        console.log("req.session.user_id:", req.session.user_id);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
