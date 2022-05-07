const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //get all entries
  router.get("/", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT * FROM entries;`;
    console.log("query:", query);
    db.query(query)
      .then((data) => {
        const entries = data.rows;
        res.json({ entries });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  // //get a single entry
  // router.get("/:id", (req, res) => {
  //   const id = req.params.id;
  //   let query = `SELECT * FROM entries WHERE id = $1;`;
  //   queryParams = [id];
  //   console.log("query:", query, "queryParams:", queryParams);
  //   db.query(query, queryParams)
  //     .then((data) => {
  //       const entry = data.rows[0];
  //       res.json({ entry });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });
  //get all entries by a single user
  router.get("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT * FROM entries WHERE user_id = $1;`;
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
  //create an entry
  router.post("/", (req, res) => {
    req.session.user_id = req.params.id;
    console.log("***req.body***:", req.body);
    let query = `INSERT INTO entries (entry_name, my_story, my_workout, my_diet, user_id)
                 VALUES ($1, $2, $3, $4, $5)
                 RETURNING *;`;
    const queryParams = [
      req.body["entry_name"],
      req.body["my_story"],
      req.body["my_workout"],
      req.body["my_diet"],
      req.session.user_id
    ];
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
  //update an entry
  router.put("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    console.log("***req.body***:", req.body);
    let query = `UPDATE entries SET entry_name = $1, my_story = $2, my_workout = $3, my_diet = $4 
                 WHERE id = $5;`
    const queryParams = [
      req.body["entry_name"],
      req.body["my_story"],
      req.body["my_workout"],
      req.body["my_diet"],
      req.session.user_id
    ];
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
  //delete an entry
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log("***req.body***:", req.body);
    let query = `DELETE FROM entries WHERE id = $1;`
    const queryParams = [id];
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
