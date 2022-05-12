const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //get logged in user's profile
  router.get("/", (req, res) => {
    const cookieId = req.session.user_id;
    // req.session.user_id = req.params.id; //set session user_id to id of user being viewed
    let query = `SELECT * FROM users WHERE id = $1;`;
    queryParams = [cookieId];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const user = data.rows[0];
        res.json({ user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
