const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //get all likes
  router.get("/", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT user_who_likes, liked_profile 
                 FROM likes JOIN users ON user_who_likes = users.id;`;
    console.log("query:", query);
    db.query(query)
      .then((data) => {
        const likes = data.rows;
        res.json({ likes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //get all likes by a single user
  router.get("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT * FROM likes WHERE user_who_likes = $1;`;
    queryParams = [req.session.user_id];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const likes = data.rows;
        res.json({ likes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //get total number of likes for a given profile/user
  router.get("/count/:id", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT liked_profile FROM likes WHERE id = $1;`;
    queryParams = [req.session.user_id];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const likes = data.rows[0].liked_profile;
        res.json({ likes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //create a like
  router.post("/", (req, res) => {
    req.session.user_id = req.params.id;
    console.log("***req.body***:", req.body);
    let query = `INSERT INTO likes (user_who_likes, liked_profile)
                 VALUES ($1, $2)
                 RETURNING *;`;
    const queryParams = [req.session.user_id, req.body["liked_profile"]];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const likes = data.rows;
        res.json({ likes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //delete a like
  router.delete("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    console.log("***req.body***:", req.body);
    let query = `DELETE FROM likes WHERE user_who_likes = $1 AND liked_profile = $2;`;
    const queryParams = [req.session.user_id, req.body["liked_profile"]];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const likes = data.rows;
        res.json({ likes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
