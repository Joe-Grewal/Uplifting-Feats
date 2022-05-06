const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT * FROM users WHERE id = ${req.session.user_id};`;
    console.log(query);
    db.query(query)
      .then((data) => {
        //this code below will going to be a redirect to the home page
        const user = data.rows[0];
        res.json({ user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
