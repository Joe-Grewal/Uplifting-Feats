const express = require("express");
const router = express.Router();

module.exports = (db) => {
  
  //get all entries by a single user
  router.get("/:id/allmyentries", (req, res) => {
    // req.session.user_id = req.params.id;
    let query = `SELECT * FROM entries WHERE user_id = $1 ORDER by id;`;
    queryParams = [req.params.id];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const entries = data.rows;
        res.json({ entries });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
