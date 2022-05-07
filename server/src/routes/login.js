const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const creds = Buffer.from(req.headers.authorization.split(" ")[1], "base64")
      .toString()
      .split(":");
    const user_name = creds[0];
    const password = creds[1];
    const query = `SELECT * FROM users WHERE user_name = '${user_name}' AND password = '${password}';`;
    //console.log(query);
    // console.log(req);
    // console.log(req.headers);
    db.query(query)
      .then((data) => {
        // console.log(data);
        user = data.rows[0];
        if (user) {
          req.session.user_id = user.id;
          res.json({ user });
        } else {
          res.status(401).json({ error: "invalid user name or password" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
