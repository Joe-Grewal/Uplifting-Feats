const express = require("express");
const router = express.Router();
const request = require("request");

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    let query = `SELECT my_diet FROM entries WHERE user_id = ${req.params.id};`;
    db.query(query)
      .then((data) => {
        const entries = data.rows;
        const food = entries[0].my_diet;
        const options = {
          url: `https://api.calorieninjas.com/v1/nutrition?query=${food}`,
          headers: {
            "X-Api-Key": "emcbtE5nJAUNMLWKmOJjbw==Uz86IV8q0dI0wNEf",
            contentType: "application/json",
          },
        };

        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            let food_results = [];
            let calorie_total = 0;
            for (let food of info.items) {
              food_results.push(`${food.name}, calories: ${food.calories}`);
              calorie_total = calorie_total + food.calories;
            }
            food_results.push(`Total calories: ${calorie_total}`);
            res.json(food_results);
          }
        }
        request(options, callback);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
