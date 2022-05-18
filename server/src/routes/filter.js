const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //get all results
  router.get("/", (req, res) => {
    req.session.user_id = req.params.id;
    let query = `SELECT * FROM users`;
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
  //filter results
  router.post("/", (req, res) => {
    // const cookieId = req.session.user_id
    const options = {
      minimumAge: req.body['minimum_age'],
      maximumAge: req.body['maximum_age'],
      gender: req.body['gender'],
      height: req.body['height'],
      dietType: req.body['dietType'],
      primaryWorkout: req.body['primaryWorkout'],
      fitnessGoal: req.body['fitnessGoal'],
      cookieId: req.body['cookieId']
    };
    console.log('options', options);
    const queryParams = [];

    let queryString = `SELECT * FROM users `;

    if (options.minimumAge) {
      queryParams.push(options.minimumAge);
      if (queryParams.length > 1) {
        queryString += `AND age >= $${queryParams.length} `;
      } else {
        queryString += `WHERE age >= $${queryParams.length} `;
      }
    }

    if (options.maximumAge) {
      queryParams.push(options.maximumAge);
      if (queryParams.length > 1) {
        queryString += `AND age <= $${queryParams.length} `;
      } else {
        queryString += `WHERE age <= $${queryParams.length} `;
      }
    }

    if (options.gender) {
      queryParams.push(`${options.gender}%`);
      if (queryParams.length > 1) {
        queryString += `AND gender LIKE $${queryParams.length} `;
      } else {
        queryString += `WHERE gender LIKE $${queryParams.length} `;
      }
    }

    if (options.height) {
      queryParams.push(options.height);
      if (queryParams.length > 1) {
        queryString += `AND height = $${queryParams.length} `;
      } else {
        queryString += `WHERE height = $${queryParams.length} `;
      }
    }

    if (options.dietType) {
      queryParams.push(`%${options.dietType}%`);
      if (queryParams.length > 1) {
        queryString += `AND diet_type LIKE $${queryParams.length} `;
      } else {
        queryString += `WHERE diet_type LIKE $${queryParams.length} `;
      }
    }

    if (options.primaryWorkout) {
      queryParams.push(`%${options.primaryWorkout}%`);
      if (queryParams.length > 1) {
        queryString += `AND primary_workout LIKE $${queryParams.length} `;
      } else {
        queryString += `WHERE primary_workout LIKE $${queryParams.length} `;
      }
    }

    if (options.fitnessGoal) {
      queryParams.push(`%${options.fitnessGoal}%`);
      if (queryParams.length > 1) {
        queryString += `AND fitness_goal LIKE $${queryParams.length} `;
      } else {
        queryString += `WHERE fitness_goal LIKE $${queryParams.length} `;
      }
    }

    if (options.cookieId) {
      queryParams.push(options.cookieId);
      if (queryParams.length > 1) {
        queryString += `AND id != $${queryParams.length} `;
      } else {
        queryString += `WHERE id != $${queryParams.length} `;
      }
    }

    // if (options.postedAt.toUpperCase() === "ASC" || options.postedAt.toUpperCase() === "DESC") {
    //   queryString += `ORDER BY price ${options.postedAt};`;
    // }
    console.log('queryString', queryString);
    db.query(queryString, queryParams).then((data) => {
      const users = data.rows;
      console.log("users:", users);
      res.json({users});
    })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
