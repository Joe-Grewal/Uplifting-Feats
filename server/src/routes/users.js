const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //get all users
  router.get("/", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT * FROM users;`;
    console.log("query:", query);
    db.query(query)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //get a single user
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    let query = `SELECT * FROM users WHERE id = $1;`;
    queryParams = [id];
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
  //create a user
  router.post("/", (req, res) => {
    req.session.user_id = req.params.id;
    console.log("***req.body***:", req.body);
    let query = `INSERT INTO users (user_name, first_name, last_name, email, password, profile_img_url, age, gender, height, weight, country, fitness_goal, diet_type, primary_workout, about_me, tips, future_goals)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
                 RETURNING *;`;
    const queryParams = [
      req.body["user_name"],
      req.body["first_name"],
      req.body["last_name"],
      req.body["email"],
      req.body["password"],
      req.body["profile_img_url"],
      req.body["age"],
      req.body["gender"],
      req.body["height"],
      req.body["weight"],
      req.body["country"],
      req.body["fitness_goal"],
      req.body["diet_type"],
      req.body["primary_workout"],
      req.body["about_me"],
      req.body["tips"],
      req.body["future_goals"]
    ];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //update a user
  router.put("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    console.log("***req.body***:", req.body);
    let query = `UPDATE users SET user_name = $1, first_name = $2, last_name = $3, email = $4, 
                 password = $5, profile_img_url = $6, age = $7, gender = $8, height = $9, 
                 weight = $10, country = $11, fitness_goal = $12, diet_type = $13, primary_workout = $14, 
                 about_me = $15, tips = $16, future_goals = $17 WHERE id = $18;`
    const queryParams = [
      req.body["user_name"],
      req.body["first_name"],
      req.body["last_name"],
      req.body["email"],
      req.body["password"],
      req.body["profile_img_url"],
      req.body["age"],
      req.body["gender"],
      req.body["height"],
      req.body["weight"],
      req.body["country"],
      req.body["fitness_goal"],
      req.body["diet_type"],
      req.body["primary_workout"],
      req.body["about_me"],
      req.body["tips"],
      req.body["future_goals"],
      req.session.user_id
    ];
    console.log("query:", query, "queryParams:", queryParams);
    db.query(query, queryParams)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
