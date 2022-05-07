const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //get all shares
  router.get("/", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT user_who_shares, shared_profile 
                 FROM shares JOIN users ON user_who_shares = users.id;`;
    console.log("query:", query);
    db.query(query)
      .then((data) => {
        const shares = data.rows;
        res.json({ shares });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  // get all shares by a single user
  router.get("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT * FROM shares WHERE user_who_shares = $1;`;
    queryParams = [req.session.user_id];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const shares = data.rows;
        res.json({ shares });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //get total number of shares for a given profile/user
  router.get("/:id/count", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT COUNT(*) FROM shares WHERE shared_profile = $1;`;
    queryParams = [req.session.user_id];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const shares = data.rows;
        res.json({ shares });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //create a share
  router.post("/", (req, res) => {
    req.session.user_id = req.params.id;
    console.log("***req.body***:", req.body);
    let query = `INSERT INTO shares (user_who_shares, shared_profile)
                 VALUES ($1, $2)
                 RETURNING *;`;
    const queryParams = [
      req.session.user_id,
      req.body["shared_profile"],
    ];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const shares = data.rows;
        res.json({ shares });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
