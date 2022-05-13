const { json } = require("express");
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //get logged in user's profile
  router.get("/", (req, res) => {
    const cookieId = req.session.user_id;
    // req.session.user_id = req.params.id; //set session user_id to id of user being viewed
    let query = `SELECT * FROM entries WHERE id = $1;`;
    queryParams = [cookieId];
    db.query(query, queryParams)
      .then((data) => {
        const user = data.rows[0];
        user.my_diet = user.my_diet.split(",");
        res.json({ user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
